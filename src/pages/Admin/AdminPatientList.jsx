
import React, { useState, useEffect } from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import { adminAPI } from '../../services/api'
import toast from 'react-hot-toast'

const AdminPatientList = () => {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    try {
      setLoading(true)
      const response = await adminAPI.getAllPatients({
        limit: entriesPerPage,
        page: currentPage,
        search: searchTerm
      })
      setPatients(response.data || [])
    } catch (error) {
      toast.error('Failed to fetch patients')
      console.error('Admin patients fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    clearTimeout(window.searchTimeout)
    window.searchTimeout = setTimeout(() => {
      fetchPatients()
    }, 500)
  }

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value))
    fetchPatients()
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

  const getStatusBadge = (status) => {
    const statusClasses = {
      'active': 'bg-green-100 text-green-800',
      'inactive': 'bg-red-100 text-red-800',
      'suspended': 'bg-yellow-100 text-yellow-800'
    }
    return statusClasses[status?.toLowerCase()] || 'bg-gray-100 text-gray-800'
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
                  placeholder="🔍 Search patients..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="md:flex mt-8 p-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2">
                <h1 className="text-[20px] font-bold py-2">Patients Database ({patients.length})</h1>
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
              {patients.length > 0 ? (
                <table className="md:w-full text-[10px] md:text-[14px] text-left">
                  <thead className="text-[#757575]">
                    <tr>
                      <th className="px-3 md:px-4 py-2">Patient's name</th>
                      <th className="px-3 md:px-4 py-2">Email</th>
                      <th className="px-3 md:px-4 py-2">Phone</th>
                      <th className="px-3 md:px-4 py-2">Total Spent</th>
                      <th className="px-3 md:px-4 py-2">Member since</th>
                      <th className="px-3 md:px-4 py-2">Status</th>
                      <th className="px-3 md:px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id} className="border-b hover:bg-gray-50">
                        <td className="px-3 md:px-4 py-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#46B8E3] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                              {patient.firstName?.charAt(0) || 'P'}
                            </div>
                            <div>
                              <div className="font-medium">{patient.firstName} {patient.lastName}</div>
                              <div className="text-[#757575] text-[10px]">ID: {patient.patientId || patient.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-2">{patient.email}</td>
                        <td className="px-3 md:px-4 py-2">{patient.phone || 'N/A'}</td>
                        <td className="px-3 md:px-4 py-2">
                          ₦{patient.totalSpent?.toLocaleString() || '0'}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {formatDate(patient.createdAt)}
                          <h1 className="text-[#46B8E3] text-[10px]">
                            {formatTime(patient.createdAt)}
                          </h1>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(patient.status)}`}>
                            {patient.status || 'Active'}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          <div className="flex space-x-2">
                            <Link 
                              to={`/admin/patient/${patient.id}`}
                              className="eye px-2 rounded text-[12px] flex items-center"
                            >
                              <EyeSlashIcon className="w-3" />
                              <span className="pt-[1px] px-2">view</span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No patients found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPatientList
