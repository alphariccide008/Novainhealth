import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../components/components.css";
import DocSideBar from "../../components/DocSideBar";
import { useApiIntegration } from "../../hooks/useApiIntegration";
import Client from "../../assets/images/googlelog.png";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const DoctorPatients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(12);

  const { getMyPatients, loading } = useApiIntegration();

  useEffect(() => {
    fetchPatients();
  }, [currentPage, searchTerm]);

  const fetchPatients = async () => {
    try {
      const params = {
        page: currentPage,
        limit,
        ...(searchTerm && { search: searchTerm }),
      };

      const result = await getMyPatients(params);
      if (result) {
        setPatients(Array.isArray(result?.data?.data) ? result.data.data : []);
        setTotalPages(Math.ceil((result?.data?.total || 0) / limit));
      }
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div
        className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
        }}
      >
        <h3 className="pt-3 text-[12px] md:text-14px">Home / Patients</h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Patients
        </h1>
      </div>
      
      <section className="md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]">
        <div className="flex mx-[2%]">
          <DocSideBar />
          
          <div className="mx-2 border flex-row w-full rounded bg-white">
            {/* Search Bar */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search patients by name, ID, or location..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46B8E3]"
              />
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-8 min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#46B8E3]"></div>
              </div>
            ) : (
              <>
                {patients.length > 0 ? (
                  <>
                    {/* Patient Cards Grid */}
                    <div className="md:flex md:flex-wrap gap-4 p-4">
                      {patients.map((patient) => (
                        <div key={patient.id} className="md:w-[30%] my-2 flex-col bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-col items-center">
                            <img
                              src={patient.photo || Client}
                              alt="Patient"
                              className="rounded-full h-[80px] w-[80px] object-cover border-2 border-[#46B8E3]"
                            />
                          </div>
                          <div className="text-center pt-3 leading-[180%]">
                            <h1 className="font-medium">{patient.firstName} {patient.lastName}</h1>
                            <div className="text-[#757575] text-[10px]">
                              <h1>Patient ID: {patient.id.slice(0, 5).toUpperCase()}</h1>
                              <h1 className="pn-3">
                                {patient.address?.city || 'Unknown'}, {patient.address?.country || 'Unknown'}
                              </h1>
                              <hr className="my-2" />
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-1/2 text-start">
                              <ul className="leading-[300%] font-semibold text-[10px]">
                                <li>Gender</li>
                                <li>Age</li>
                                <li>Genotype</li>
                                <li>Blood Group</li>
                              </ul>
                            </div>
                            <div className="w-1/2 text-end text-[10px]">
                              <ul className="leading-[300%] text-[#757575]">
                                <li>{patient.gender || 'N/A'}</li>
                                <li>{patient.age ? `${patient.age} Years` : 'N/A'}</li>
                                <li>{patient.genotype || 'N/A'}</li>
                                <li>{patient.bloodGroup || 'N/A'}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-5 py-2 text-center rounded bg-[#46B8E3] text-white mx-[10%] hover:bg-[#3aa7d1] transition-colors">
                            <Link 
                              to={`/patients/${patient.id}`} 
                              className="w-full text-[12px] block"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-6 mb-4 space-x-2">
                        <button
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === 1
                              ? "bg-gray-200 cursor-not-allowed"
                              : "bg-[#46B8E3] text-white hover:bg-[#3aa7d1]"
                          }`}
                        >
                          Previous
                        </button>

                        <span className="px-4 py-2 text-gray-700">
                          Page {currentPage} of {totalPages}
                        </span>

                        <button
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === totalPages
                              ? "bg-gray-200 cursor-not-allowed"
                              : "bg-[#46B8E3] text-white hover:bg-[#3aa7d1]"
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  /* Empty State */
                  <div className="flex flex-col items-center justify-center py-16 min-h-[300px]">
                    <div className="bg-[#f0f9ff] p-6 rounded-full mb-4">
                      <UserGroupIcon className="h-12 w-12 text-[#46B8E3]" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      {searchTerm ? 'No matching patients found' : 'No patients available'}
                    </h2>
                    <p className="text-gray-500 text-center max-w-md mb-4">
                      {searchTerm
                        ? 'Try adjusting your search or remove filters to see more results'
                        : 'When you have patients, they will appear here. You can also add new patients.'}
                    </p>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="px-4 py-2 bg-[#46B8E3] text-white rounded-lg hover:bg-[#3aa7d1] transition-colors"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPatients;