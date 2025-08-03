import React, { useState, useEffect, useCallback } from "react";
import { useApiIntegration } from "../../hooks/useApiIntegration";
import { doctorAPI } from "../../services/doctorApi";
import DocSideBar from "../../components/DocSideBar";
import { useDropzone } from "react-dropzone";
import dayjs from "dayjs";
import toast from 'react-hot-toast';

// Reusable Components
const Input = ({ label, ...rest }) => (
  <div className="w-full md:w-1/3 p-1">
    <label className="block text-xs text-gray-600">{label}</label>
    <input {...rest} className="w-full border rounded p-2 text-sm"/>
  </div>
);

const TextArea = ({ label, ...rest }) => (
  <div className="w-full p-1">
    <label className="block text-xs text-gray-600">{label}</label>
    <textarea {...rest} className="w-full border rounded p-2 text-sm" rows={3}/>
  </div>
);

const AddDeleteButtons = ({onAdd, onDelete}) => (
  <div className="flex items-center gap-2 mt-2">
    <button type="button" className="bg-blue-600 text-white px-2 py-1 rounded" onClick={onAdd}>+ Add</button>
    {onDelete && <button type="button" className="bg-red-500 text-white px-2 py-1 rounded" onClick={onDelete}>× Delete</button>}
  </div>
);

const MultiDropzone = ({ files, onDrop, onRemove, label }) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, 
    accept:{"image/*":[]}, 
    multiple:true
  });
  
  return (
    <div className="w-full p-1">
      {label && <label className="block text-xs text-gray-600">{label}</label>}
      <div {...getRootProps()} className="border-dashed border-2 p-4 text-center text-sm text-gray-500 cursor-pointer">
        <input {...getInputProps()} />
        {isDragActive ? "Drop images here..." : "Drag or click to upload images"}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {files.map((file, idx) => (
          <div key={idx} className="relative w-20 h-20 border rounded overflow-hidden">
            <img 
              src={typeof file === 'string' ? file : URL.createObjectURL(file)} 
              alt="preview" 
              className="w-full h-full object-cover"
            />
            <button 
              type="button" 
              className="absolute top-0 right-0 bg-red-500 text-xs text-white px-1" 
              onClick={() => onRemove(typeof file === 'string' ? file : file.name)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const LicenseEntry = ({ lic, onChange, onAdd, onDelete }) => {
  const onDrop = useCallback(accepted => {
    onChange({ ...lic, images: [...lic.images, ...accepted] });
  }, [lic, onChange]);
  
  const removeImage = name => onChange({ 
    ...lic, 
    images: lic.images.filter(f => 
      typeof f === 'string' ? f !== name : f.name !== name
    ) 
  });
  
  return (
    <div className="border p-3 mb-4">
      <Input 
        label="Registration" 
        value={lic.registration} 
        onChange={e => onChange({...lic, registration: e.target.value})}
      />
      <Input 
        label="Year" 
        type="number" 
        value={lic.year} 
        onChange={e => onChange({...lic, year: e.target.value})}
      />
      <MultiDropzone 
        files={lic.images} 
        onDrop={onDrop} 
        onRemove={removeImage} 
        label="License Images"
      />
      <div className="flex justify-end">
        <AddDeleteButtons onAdd={onAdd} onDelete={onDelete}/>
      </div>
    </div>
  );
};

const DoctorProfile = () => {
  const { loading, toastSuccess, toastError } = useApiIntegration();
  const [profileData, setProfileData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    profilePhoto: null,
    
    // About & Clinic
    aboutMe: "",
    clinicName: "",
    clinicAddress: "",
    clinicImages: [],
    contactDetails: "",
    pricing: "",
    
    // Consultation Fees
    consultationFees: {
      textConsultation: "", 
      audioConsultation: "",
      videoConsultation: "", 
      followUpConsultation: "",
      emergencyConsultation: ""
    },
    
    // Arrays
    services: [],
    education: [{college:"", yearStarted:"", yearFinished:"", degree:""}],
    awards: [{nameOfAward:"", year:""}],
    memberships: [{nameOfOrganisation:""}],
    licenses: [{registration:"", year:"", images:[]}]
  });
  
  const [specInput, setSpecInput] = useState("");

  // Load profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await doctorAPI.getProfile();
        if (response.data) {
          // Transform API data to match our state structure
          const data = response.data;
          setProfileData({
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            countryCode: data.phone?.countryCode || "",
            phoneNumber: data.phone?.phoneNumber || "",
            gender: data.gender || "",
            dob: data.dateOfBirth ? dayjs(data.dateOfBirth).format('YYYY-MM-DD') : "",
            maritalStatus: data.maritalStatus || "",
            profilePhoto: data.profilePhoto || null,
            
            aboutMe: data.aboutMe || "",
            clinicName: data.clinicInfo?.clinicName || "",
            clinicAddress: data.clinicInfo?.clinicAddress || "",
            clinicImages: data.clinicInfo?.clinicImages || [],
            contactDetails: data.contactDetails || "",
            pricing: data.pricing || "",
            
            consultationFees: data.consultationFees || {
              textConsultation: "", 
              audioConsultation: "",
              videoConsultation: "", 
              followUpConsultation: "",
              emergencyConsultation: ""
            },
            
            services: data.servicesAndSpecialization || [],
            education: data.education?.length ? data.education : [{college:"", yearStarted:"", yearFinished:"", degree:""}],
            awards: data.awards?.length ? data.awards : [{nameOfAward:"", year:""}],
            memberships: data.memberships?.length ? data.memberships : [{nameOfOrganisation:""}],
            licenses: data.registrationAndLicenses?.length ? 
              data.registrationAndLicenses.map(lic => ({
                registration: lic.registration || "",
                year: lic.year || "",
                images: lic.documentImage ? [lic.documentImage] : []
              })) : 
              [{registration:"", year:"", images:[]}]
          });
        }
      } catch (err) {
        console.log("Failed to fetch profile:", err);
        }
    };
    
    fetchProfile();
  }, []);

  // Profile photo dropzone
  const profDrop = useDropzone({
    onDrop: accepted => setProfileData(prev => ({
      ...prev,
      profilePhoto: accepted[0]
    })),
    accept: {"image/*":[]}, 
    multiple:false
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (parentField, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setProfileData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const handleAddArrayItem = (field, newItem) => {
    setProfileData(prev => ({
      ...prev,
      [field]: [...prev[field], newItem]
    }));
  };

  const handleRemoveArrayItem = (field, index) => {
    setProfileData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleAddService = () => {
    if (specInput.trim()) {
      setProfileData(prev => ({
        ...prev,
        services: [...prev.services, specInput.trim()]
      }));
      setSpecInput("");
    }
  };

  const handleRemoveService = (index) => {
    setProfileData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();

      // Basic Info
      form.append("firstName", profileData.firstName);
      form.append("lastName", profileData.lastName);
      form.append("phone[countryCode]", profileData.countryCode);
      form.append("phone[phoneNumber]", profileData.phoneNumber);
      form.append("gender", profileData.gender);
      form.append("dateOfBirth", profileData.dob);
      form.append("maritalStatus", profileData.maritalStatus);
      if (
        profileData.profilePhoto &&
        typeof profileData.profilePhoto !== "string"
      ) {
        form.append("profilePhoto", profileData.profilePhoto);
      }

      // About & Clinic
      form.append("aboutMe", profileData.aboutMe);
      form.append("clinicInfo[clinicName]", profileData.clinicName);
      form.append("clinicInfo[clinicAddress]", profileData.clinicAddress);
      profileData.clinicImages.forEach((f, i) => {
        if (typeof f !== "string") {
          form.append("clinicInfo[clinicImages]", f);
        }
      });

      form.append("contactDetails", profileData.contactDetails);
      form.append("pricing", profileData.pricing);

      // Consultation Fees
      Object.entries(profileData.consultationFees).forEach(([k, v]) => {
        form.append(`consultationFees[${k}]`, v);
      });

      // Services
      form.append(
        "servicesAndSpecialization",
        JSON.stringify(profileData.services)
      );

      // Education
      profileData.education.forEach((ed, i) => {
        form.append(`education[${i}][college]`, ed.college);
        form.append(`education[${i}][yearStarted]`, ed.yearStarted);
        form.append(`education[${i}][yearFinished]`, ed.yearFinished);
        form.append(`education[${i}][degree]`, ed.degree);
      });

      // Awards
      profileData.awards.forEach((a, i) => {
        form.append(`awards[${i}][nameOfAward]`, a.nameOfAward);
        form.append(`awards[${i}][year]`, a.year);
      });

      // Memberships
      profileData.memberships.forEach((m, i) => {
        form.append(
          `memberships[${i}][nameOfOrganisation]`,
          m.nameOfOrganisation
        );
      });

      // Licenses
      profileData.licenses.forEach((lic, i) => {
        form.append(
          `registrationAndLicenses[${i}][registration]`,
          lic.registration
        );
        form.append(`registrationAndLicenses[${i}][year]`, lic.year);
        lic.images.forEach((f) => {
          if (typeof f !== "string") {
            form.append(`registrationAndLicenses[${i}][documentImage]`, f);
          }
        });
      });


      

      // --- SEND TO API ---
      const response = await doctorAPI.updateProfile(form);
      const resData = response?.data || response;
      console.log(resData)

      // --- CHECK STATUS ---
      if (resData?.status === "Success") {
        const name = resData?.data?.firstName + " " + resData?.data?.lastName;
        const updatedAt = resData?.data?.updatedAt || "N/A";
        const msg = `✅ Profile Saved\nName: ${name}\nUpdated At: ${updatedAt}`;
        alert(msg);
        toast.success("Profile saved successfully!");
      } else {
        const errMsg = resData?.message || "Unexpected error from server.";
        alert("❌ Failed:\n" + errMsg);
        toast.error(errMsg);
      }
    } catch (err) {
      console.log("Profile save error:", err);

      const errorData = err?.response?.data;
      let errorMessage = "Failed to save profile";

      if (Array.isArray(errorData?.message)) {
        errorMessage = errorData.message.join("\n");
      } else if (typeof errorData?.message === "string") {
        errorMessage = errorData.message;
      }

      alert("❌ Error:\n" + errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-blue-900 text-white p-4 z-10">
        <h1 className="text-lg">Doctor Profile</h1>
      </div>
      <section className="pt-20 bg-gray-100 min-h-screen pb-10">
        <div className="flex mx-4 gap-4">
          <DocSideBar />
          <form onSubmit={handleSubmit} className="bg-white p-6 flex-1 rounded space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input 
                label="First Name" 
                value={profileData.firstName} 
                onChange={e => handleInputChange('firstName', e.target.value)}
              />
              <Input 
                label="Last Name" 
                value={profileData.lastName} 
                onChange={e => handleInputChange('lastName', e.target.value)}
              />
              <Input 
                label="Country Code" 
                value={profileData.countryCode} 
                onChange={e => handleInputChange('countryCode', e.target.value)}
              />
              <Input 
                label="Phone Number" 
                value={profileData.phoneNumber} 
                onChange={e => handleInputChange('phoneNumber', e.target.value)}
              />
              <select 
                className="border rounded p-2" 
                value={profileData.gender} 
                onChange={e => handleInputChange('gender', e.target.value)}
              >
                <option value="">Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              <Input 
                label="Date of Birth" 
                type="date" 
                value={profileData.dob} 
                onChange={e => handleInputChange('dob', e.target.value)}
              />
              <select 
                className="border rounded p-2" 
                value={profileData.maritalStatus} 
                onChange={e => handleInputChange('maritalStatus', e.target.value)}
              >
                <option value="">Marital Status</option>
                <option value="SINGLE">Single</option>
                <option value="MARRIED">Married</option>
              </select>
              <div {...profDrop.getRootProps()} className="border-dashed border-2 p-4 text-center">
                <input {...profDrop.getInputProps()}/>
                {profileData.profilePhoto ? 
                  (typeof profileData.profilePhoto === 'string' ? 
                    "Profile photo uploaded" : 
                    profileData.profilePhoto.name) : 
                  "Upload Profile Photo"}
              </div>
            </div>

            {/* About & Clinic */}
            <TextArea 
              label="About Me" 
              value={profileData.aboutMe} 
              onChange={e => handleInputChange('aboutMe', e.target.value)}
            />
            
            <h2 className="font-bold text-lg">Clinic Info</h2>
            <Input 
              label="Clinic Name" 
              value={profileData.clinicName} 
              onChange={e => handleInputChange('clinicName', e.target.value)}
            />
            <Input 
              label="Clinic Address" 
              value={profileData.clinicAddress} 
              onChange={e => handleInputChange('clinicAddress', e.target.value)}
            />
            <MultiDropzone 
              files={profileData.clinicImages} 
              onDrop={accepted => handleInputChange('clinicImages', [...profileData.clinicImages, ...accepted])} 
              onRemove={name => handleInputChange('clinicImages', profileData.clinicImages.filter(f => 
                typeof f === 'string' ? f !== name : f.name !== name
              ))}
            />

            <TextArea 
              label="Contact Details" 
              value={profileData.contactDetails} 
              onChange={e => handleInputChange('contactDetails', e.target.value)}
            />
            <TextArea 
              label="Pricing" 
              value={profileData.pricing} 
              onChange={e => handleInputChange('pricing', e.target.value)}
            />

            {/* Consultation Fees */}
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(profileData.consultationFees).map(([k,v]) => (
                <Input 
                  key={k} 
                  label={k.replace(/Consultation$/, " Consult")} 
                  type="number" 
                  value={v} 
                  onChange={e => handleNestedChange('consultationFees', k, e.target.value)}
                />
              ))}
            </div>

            {/* Services & Specializations */}
            <div>
              <label className="block text-xs text-gray-600">Services & Specializations</label>
              <div className="flex gap-2 flex-wrap">
                {profileData.services.map((s, i) => (
                  <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded flex items-center">
                    {s} 
                    <button 
                      type="button" 
                      onClick={() => handleRemoveService(i)} 
                      className="ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex mt-2">
                <input
                  type="text"
                  value={specInput}
                  placeholder="Type service and click Add"
                  className="w-full border rounded p-2 text-sm"
                  onChange={e => setSpecInput(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddService}
                  className="ml-2 bg-blue-500 text-white px-3 rounded"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-bold text-lg">Education</h2>
              {profileData.education.map((ed, i) => (
                <div key={i} className="flex gap-2 flex-wrap">
                  <Input 
                    label="College" 
                    value={ed.college} 
                    onChange={e => handleArrayChange('education', i, {
                      ...ed,
                      college: e.target.value
                    })}
                  />
                  <Input 
                    label="Year Started" 
                    type="number" 
                    value={ed.yearStarted} 
                    onChange={e => handleArrayChange('education', i, {
                      ...ed,
                      yearStarted: e.target.value
                    })}
                  />
                  <Input 
                    label="Year Finished" 
                    type="number" 
                    value={ed.yearFinished} 
                    onChange={e => handleArrayChange('education', i, {
                      ...ed,
                      yearFinished: e.target.value
                    })}
                  />
                  <Input 
                    label="Degree" 
                    value={ed.degree} 
                    onChange={e => handleArrayChange('education', i, {
                      ...ed,
                      degree: e.target.value
                    })}
                  />
                  <AddDeleteButtons 
                    onAdd={() => handleAddArrayItem('education', {
                      college: "",
                      yearStarted: "",
                      yearFinished: "",
                      degree: ""
                    })} 
                    onDelete={() => handleRemoveArrayItem('education', i)}
                  />
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <h2 className="font-bold text-lg">Awards</h2>
              {profileData.awards.map((a, i) => (
                <div key={i} className="flex gap-2 items-end flex-wrap">
                  <Input 
                    label="Award" 
                    value={a.nameOfAward} 
                    onChange={e => handleArrayChange('awards', i, {
                      ...a,
                      nameOfAward: e.target.value
                    })}
                  />
                  <Input 
                    label="Year" 
                    type="number" 
                    value={a.year} 
                    onChange={e => handleArrayChange('awards', i, {
                      ...a,
                      year: e.target.value
                    })}
                  />
                  <AddDeleteButtons 
                    onAdd={() => handleAddArrayItem('awards', {
                      nameOfAward: "",
                      year: ""
                    })} 
                    onDelete={() => handleRemoveArrayItem('awards', i)}
                  />
                </div>
              ))}
            </div>

            {/* Memberships */}
            <div>
              <h2 className="font-bold text-lg">Memberships</h2>
              {profileData.memberships.map((m, i) => (
                <div key={i} className="flex gap-2 items-end flex-wrap">
                  <Input 
                    label="Organization" 
                    value={m.nameOfOrganisation} 
                    onChange={e => handleArrayChange('memberships', i, {
                      ...m,
                      nameOfOrganisation: e.target.value
                    })}
                  />
                  <AddDeleteButtons 
                    onAdd={() => handleAddArrayItem('memberships', {
                      nameOfOrganisation: ""
                    })} 
                    onDelete={() => handleRemoveArrayItem('memberships', i)}
                  />
                </div>
              ))}
            </div>

            {/* Licenses */}
            <div>
              <h2 className="font-bold text-lg">Registration & Licenses</h2>
              {profileData.licenses.map((lic, i) => (
                <LicenseEntry
                  key={i}
                  lic={lic}
                  onChange={newLic => handleArrayChange('licenses', i, newLic)}
                  onAdd={() => handleAddArrayItem('licenses', {
                    registration: "",
                    year: "",
                    images: []
                  })}
                  onDelete={() => handleRemoveArrayItem('licenses', i)}
                />
              ))}
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className={`w-full py-3 text-white rounded ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DoctorProfile;