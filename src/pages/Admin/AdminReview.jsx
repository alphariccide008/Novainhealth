
import React, { useState, useEffect } from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { StarIcon } from '@heroicons/react/24/solid'
import { ratingAPI } from '../../services/api'
import toast from 'react-hot-toast'

const AdminReview = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      setLoading(true)
      const response = await ratingAPI.getAllRatings({
        limit: entriesPerPage,
        page: currentPage,
        search: searchTerm
      })
      setReviews(response.data || [])
    } catch (error) {
      toast.error('Failed to fetch reviews')
      console.error('Admin reviews fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    clearTimeout(window.searchTimeout)
    window.searchTimeout = setTimeout(() => {
      fetchReviews()
    }, 500)
  }

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value))
    fetchReviews()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
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
                  placeholder="🔍 Search reviews..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="md:flex mt-8 p-3 md:px-8 justify-between">
              <div className="flex-col md:w-1/2">
                <h1 className="text-[20px] font-bold py-2">Reviews & Ratings ({reviews.length})</h1>
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
              {reviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-md border">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-[#46B8E3] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {review.patient?.firstName?.charAt(0) || 'P'}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">
                            {review.patient?.firstName} {review.patient?.lastName}
                          </h3>
                          <p className="text-gray-500 text-xs">
                            {formatDate(review.createdAt)}
                          </p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-medium text-sm mb-1">
                          Dr. {review.doctor?.firstName} {review.doctor?.lastName}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {review.doctor?.specialty || 'General Practice'}
                        </p>
                      </div>

                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm font-medium">{review.rating}/5</span>
                      </div>

                      {review.comment && (
                        <div className="mb-3">
                          <p className="text-gray-700 text-sm italic">
                            "{review.comment}"
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Appointment: {review.appointment?.id}</span>
                        <span className={`px-2 py-1 rounded ${
                          review.rating >= 4 ? 'bg-green-100 text-green-800' :
                          review.rating >= 3 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {review.rating >= 4 ? 'Positive' :
                           review.rating >= 3 ? 'Neutral' : 'Negative'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No reviews found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminReview
