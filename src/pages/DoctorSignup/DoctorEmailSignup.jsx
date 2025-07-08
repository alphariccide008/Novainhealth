import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import Logo from '../../../public/Vector.png';
import Doctorsignup from '../../assets/images/doctor.png';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const PatientSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    country: '',
    state: '',
    localGovt: '',
    language: '',
    roleKey: 'Doctor',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'localGovt' && !value.trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await axios.post('https://novain-health-api-u33pl.ondigitalocean.app/auth/signup', formData);
      console.log('Signup Success:', res.data);
      setMessage('Registration successful!');
      setMessageType('success');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        country: '',
        state: '',
        localGovt: '',
        language: '',
        roleKey: 'Doctor',
        password: ''
      });
      setConfirmPassword('');
      setTimeout(() => navigate('/doctorlogin'), 2000);
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setMessage('Registration failed. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full text-[10px] text-gray-700";

  return (
    <section>
      <div className="relative mx-[5%] md:mx-[3%] lg:mx-[5%] py-[15%]">
        <div className="md:flex shadow-md rounded">
          <div className="md:w-1/2">
            <img src={Doctorsignup} alt="doctor" className="md:h-full lg:h-full" />
          </div>
          <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
            <div className="flex text-[14px] text-[#46B8E3] p-[5%]">
              <Link to="/doctorsignup" className="flex">
                <ChevronLeftIcon className="h-[20px] w-[20px] mr-2" />
                Back
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="px-[3%] lg:px-[20%] text-center space-y-4">
              <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
              <div className="flex justify-between pt-10 w-full">
                <h1 className="font-semibold text-[12px]">Doctor Registration</h1>
                <Link to="/doctorsignup" className="text-[12px] text-[#46B8E3]">Not a Doctor?</Link>
              </div>

              {/* First Name */}
              <div className="border border-gray-300 rounded p-2">
                <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className={inputClass} />
                {errors.firstName && <span className="text-red-500 text-[10px]">{errors.firstName}</span>}
              </div>

              {/* Last Name */}
              <div className="border border-gray-300 rounded p-2">
                <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className={inputClass} />
                {errors.lastName && <span className="text-red-500 text-[10px]">{errors.lastName}</span>}
              </div>

              {/* Mobile */}
              <div className="border border-gray-300 rounded p-2">
                <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className={inputClass} />
                {errors.mobile && <span className="text-red-500 text-[10px]">{errors.mobile}</span>}
              </div>

              {/* Email */}
              <div className="border border-gray-300 rounded p-2">
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
                {errors.email && <span className="text-red-500 text-[10px]">{errors.email}</span>}
              </div>

              {/* Country */}
              <div className="border border-gray-300 rounded p-2">
                <select name="country" value={formData.country} onChange={handleChange} className={inputClass}>
                  <option value="">Country of residence</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                </select>
                {errors.country && <span className="text-red-500 text-[10px]">{errors.country}</span>}
              </div>

              {/* State */}
              <div className="border border-gray-300 rounded p-2">
                <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className={inputClass} />
                {errors.state && <span className="text-red-500 text-[10px]">{errors.state}</span>}
              </div>

              {/* Local Govt */}
              <div className="border border-gray-300 rounded p-2">
                <input name="localGovt" value={formData.localGovt} onChange={handleChange} placeholder="Local Government" className={inputClass} />
              </div>

              {/* Language */}
              <div className="border border-gray-300 rounded p-2">
                <select name="language" value={formData.language} onChange={handleChange} className={inputClass}>
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Yoruba">Yoruba</option>
                  <option value="Hausa">Hausa</option>
                </select>
                {errors.language && <span className="text-red-500 text-[10px]">{errors.language}</span>}
              </div>

              {/* Password */}
              <div className="border border-gray-300 rounded p-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={inputClass}
                />
                {errors.password && <span className="text-red-500 text-[10px]">{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className="border border-gray-300 rounded p-2">
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className={inputClass}
                />
                {errors.confirmPassword && <span className="text-red-500 text-[10px]">{errors.confirmPassword}</span>}
              </div>

              <div className="flex text-center items-start py-3 space-x-2 md:text-left text-sm">
                <label className='text-[8px]'>
                  When you select languages, patients that understand the same language can be paired with you
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center">
                <button type="submit" disabled={loading} className="text-white rounded py-2 px-14 bg-[#46B8E3] text-[12px]">
                  {loading ? 'Signing up...' : 'Sign up'}
                </button>
              </div>

              {/* Success/Error Message */}
              {message && (
                <p className={`text-[12px] ${messageType === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                  {message}
                </p>
              )}

              <p className="text-xs text-[16px] px-5 py-10 text-gray-500">
                By signing up, you agree to our
                <a href="#" className="text-[#46B8E3]"> Terms of service</a> and
                <a href="#" className="text-[#46B8E3]"> Privacy Policy</a>.
              </p>

              <hr className="my-4" />

              <p className="text-sm pb-[15%]">
                Already have an account?
                <Link to="/login" className="text-[#46B8E3] hover:underline"> Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSignup;
