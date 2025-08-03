
import React, { useState, useEffect } from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import { XMarkIcon } from '@heroicons/react/24/outline'
import { adminAPI } from '../../services/api'
import toast from 'react-hot-toast'

const AdminInvoiceList = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    try {
      setLoading(true)
      const response = await adminAPI.getTransactions({
        limit: entriesPerPage,
        page: currentPage,
        search: searchTerm
      })
      setTransactions(response.data || [])
    } catch (error) {
      toast.error('Failed to fetch transactions')
      console.error('Admin transactions fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    clearTimeout(window.searchTimeout)
    window.searchTimeout = setTimeout(() => {
      fetchTransactions()
    }, 500)
  }

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value))
    fetchTransactions()
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
      'completed': 'bg-green-500',
      'pending': 'bg-yellow-500',
      'failed': 'bg-red-500',
      'cancelled': 'bg-gray-500'
    }
    return statusClasses[status?.toLowerCase()] || 'bg-gray-500'
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
                  placeholder="🔍 Search transactions..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="md:flex mt-8 p-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2">
                <h1 className="text-[20px] font-bold py-2">Transaction List ({transactions.length})</h1>
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

            <div className="overflow-x-auto w-full">
              <div className="mx-auto md:px-3 min-w-[600px] md:min-w-0">
                {transactions.length > 0 ? (
                  <table className="w-full text-[10px] md:text-[14px] text-left">
                    <thead className="text-[#757575]">
                      <tr>
                        <th className="px-3 md:px-4 py-2">Patient's Name</th>
                        <th className="px-3 md:px-4 py-2">Phone</th>
                        <th className="px-3 md:px-4 py-2">Amount</th>
                        <th className="px-3 md:px-4 py-2">Transaction ID</th>
                        <th className="px-3 md:px-4 py-2">Date</th>
                        <th className="px-3 md:px-4 py-2">Status</th>
                        <th className="px-3 md:px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b hover:bg-gray-50">
                          <td className="px-3 md:px-4 py-2">
                            <div className="md:flex items-center">
                              <div className="mr-4 mb-2 md:mb-0">
                                <div className="w-[35px] h-[35px] rounded-full bg-[#46B8E3] flex items-center justify-center text-white font-semibold">
                                  {transaction.user?.firstName?.charAt(0) || 'P'}
                                </div>
                              </div>
                              <div>
                                <h1>{transaction.user?.firstName} {transaction.user?.lastName}</h1>
                                <p className="text-[#757575] text-[10px]">
                                  {transaction.user?.patientId || transaction.user?.id}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            {transaction.user?.phone || 'N/A'}
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            ₦{transaction.amount?.toLocaleString()}
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            {transaction.reference || transaction.transactionId}
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            {formatDate(transaction.createdAt)}
                            <div className="text-[#46B8E3] text-[10px]">
                              {formatTime(transaction.createdAt)}
                            </div>
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            <h1 className={`text-white text-[10px] px-3 p-[2px] rounded ${getStatusBadge(transaction.status)}`}>
                              {transaction.status || 'Completed'}
                            </h1>
                          </td>
                          <td className="px-3 md:px-4 py-2">
                            <div className="md:flex gap-2">
                              <Link 
                                to={`/admin/transaction/${transaction.id}`}
                                className="flex eye py-[2px] rounded items-center text-[#021140] text-[12px] px-2"
                              >
                                <EyeSlashIcon className="w-4 h-4 mr-1" />
                                <span>View</span>
                              </Link>
                              {transaction.status === 'pending' && (
                                <button className="flex cancel py-[2px] rounded my-2 items-center text-[#C52184] text-[12px] px-2">
                                  <XMarkIcon className="w-4 h-4 mr-1" />
                                  <span>Cancel</span>
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No transactions found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminInvoiceList
