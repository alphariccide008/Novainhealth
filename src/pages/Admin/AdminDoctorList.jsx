
import React, { useState, useEffect } from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import { adminAPI } from '../../services/api'
import toast from 'react-hot-toast'

const AdminDoctorList = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchDoctors()
  }, [])

  const fetchDoctors = async () => {
    try {
      setLoading(true)
      const response = await adminAPI.getAllDoctors({
        limit: entriesPerPage,
        page: currentPage,
        search: searchTerm
      })
      setDoctors(response.data || [])
    } catch (error) {
      toast.error('Failed to fetch doctors')
      console.error('Admin doctors fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    clearTimeout(window.searchTimeout)
    window.searchTimeout = setTimeout(() => {
      fetchDoctors()
    }, 500)
  }

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value))
    fetchDoctors()
  }

  const handleVerifyDoctor = async (doctorId) => {
    try {
      await adminAPI.verifyDoctor(doctorId)
      toast.success('Doctor verified successfully')
      fetchDoctors()
    } catch (error) {
      toast.error('Failed to verify doctor')
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B8E3]"></div>
      </div>
    )
  }

  return (
    <>
      <div className="md:pt-[10%] pt-[30%] poppins md:mx-[3%]">
        <div className="md:flex w-full">
          <div className="flex-co md:w-[15%]">
            <AdminSidebar/>
          </div>

          <div className="flex-col md:w-full">
            <div className="md:flex px-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2 space-y-3">
                <h1 className="text-[24px] font-bold">Welcome Admin</h1>
                <h4 className="text-[14px] text-[#757575] pb-2">
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </h4>
              </div>
              <div className="flex-col md:w-1/3">
                <input 
                  type="text" 
                  className="p-2 border border-gray-300 w-full" 
                  placeholder="🔍 Search doctors..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="md:flex mt-8 p-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2">
                <h1 className="text-[20px] font-bold py-2">Doctors Database ({doctors.length})</h1>
              </div>
              <div className="flex-col md:w-1/4">
                <span className="text-[12px]">show</span> 
                <input 
                  type="number" 
                  className="px-[3px] w-14 rounded border mx-2 border-gray-300" 
                  value={entriesPerPage}
                  onChange={handleEntriesChange}
                  min="1"
                  max="100"
                />  
                <span className="text-[12px]">entries</span>
              </div>
            </div>

            <div className="mx-auto md:px-3 overflow-x-auto">
              {doctors.length > 0 ? (
                <table className="md:w-full text-[10px] md:text-[14px] text-left">
                  <thead className="text-[#757575]">
                    <tr>
                      <th className="px-3 md:px-4 py-2">Doctor's name</th>
                      <th className="px-3 md:px-4 py-2">Specialty</th>
                      <th className="px-3 md:px-4 py-2">Earned</th>
                      <th className="px-3 md:px-4 py-2">Member since</th>
                      <th className="px-3 md:px-4 py-2">Profile completed</th>
                      <th className="px-3 md:px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <tr key={doctor.id} className="border-b hover:bg-gray-50">
                        <td className="px-3 md:px-4 py-2">
                          Dr. {doctor.firstName} {doctor.lastName}
                          <div className="text-[#757575] text-[10px]">{doctor.email}</div>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {doctor.specialty || 'Not specified'}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          ₦{doctor.totalEarnings?.toLocaleString() || '0'}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {formatDate(doctor.createdAt)}
                          <h1 className="text-[#46B8E3] text-[10px]">
                            {formatTime(doctor.createdAt)}
                          </h1>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          <div className="md:flex items-center">
                            <h1 className="pb-2">
                              {doctor.profileCompletion || 0}%
                            </h1>
                            <Link 
                              to={`/doctor-profile/${doctor.id}`}
                              className="eye px-2 rounded md:mx-2 text-[12px] flex items-center"
                            >
                              <EyeSlashIcon className="w-3" />
                              <span className="pt-[1px] px-2">view</span>
                            </Link>
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {!doctor.isVerified && (
                            <button
                              onClick={() => handleVerifyDoctor(doctor.id)}
                              className="bg-green-500 text-white px-3 py-1 rounded text-[12px] hover:bg-green-600"
                            >
                              Verify
                            </button>
                          )}
                          {doctor.isVerified && (
                            <span className="text-green-600 text-[12px]">Verified</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No doctors found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDoctorList
