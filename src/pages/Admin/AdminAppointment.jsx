import React, { useState, useEffect } from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { adminAPI } from '../../services/api'
import toast from 'react-hot-toast'

const AdminAppointment = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      const response = await adminAPI.getAllAppointments({ 
        limit: entriesPerPage,
        page: currentPage,
        search: searchTerm 
      })
      setAppointments(response.data || [])
    } catch (error) {
      toast.error('Failed to fetch appointments')
      console.error('Admin appointments fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    // Debounce search
    clearTimeout(window.searchTimeout)
    window.searchTimeout = setTimeout(() => {
      fetchAppointments()
    }, 500)
  }

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value))
    fetchAppointments()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (timeString) => {
    const time = new Date(timeString)
    return time.toLocaleTimeString('en-US', {
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
                  placeholder="🔍 Search appointments..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />                       
              </div>
            </div>
            
            <div className="md:flex mt-8 p-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2">
                <h1 className="text-[20px] font-bold py-2">Appointments ({appointments.length})</h1>
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
              {appointments.length > 0 ? (
                <table className="md:w-full text-[10px] md:text-[14px] text-left">
                  <thead className="text-[#757575]">
                    <tr>
                      <th className="px-3 md:px-4 py-2">Doctor name</th>
                      <th className="px-3 md:px-4 py-2">Patient Name</th>
                      <th className="px-3 md:px-4 py-2">Amount</th>
                      <th className="px-3 md:px-4 py-2">Date</th>
                      <th className="px-3 md:px-4 py-2">Status</th>
                      <th className="px-3 md:px-4 py-2">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b hover:bg-gray-50">
                        <td className="px-3 md:px-4 py-2">
                          Dr. {appointment.doctor?.firstName} {appointment.doctor?.lastName}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {appointment.patient?.firstName} {appointment.patient?.lastName}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          ₦{appointment.amount?.toLocaleString()}
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {formatDate(appointment.date)}
                          <div className="text-[#46B8E3] text-[10px]">
                            {formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}
                          </div>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-3 md:px-4 py-2">
                          {appointment.type || 'Online'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No appointments found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdminAppointment