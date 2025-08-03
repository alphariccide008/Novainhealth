import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import '../../components/components.css'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PatientSidebar from "../../components/PatientSidebar";
import Surggy from '../../assets/images/surggy.png'
import MoneyWallet from '../../assets/images/moneywallet.png'
import Caution from '../../assets/images/caution.png'
import { FaEdit } from 'react-icons/fa';
import { ChatBubbleLeftEllipsisIcon, VideoCameraIcon, BookmarkIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useApiIntegration } from '../../hooks/useApiIntegration'
import { appointmentAPI } from '../../services/appointmentApi'
import { doctorAPI } from '../../services/doctorApi'
import { chatAPI } from '../../services/chatApi'
import { ratingAPI } from '../../services/ratingApi'
import toast from 'react-hot-toast'

const PatientViewAppointment = () => {
  const [appointment, setAppointment] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [availability, setAvailability] = useState([])
  const [selectedDay, setSelectedDay] = useState('MONDAY')
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rescheduleMode, setRescheduleMode] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const { createChatWithDoctor, createRating } = useApiIntegration()

  useEffect(() => {
    if (id) {
      fetchAppointmentDetails()
    }
  }, [id])

  const fetchAppointmentDetails = async () => {
    try {
      setLoading(true)
      const [appointmentResponse, availabilityResponse] = await Promise.all([
        appointmentAPI.getAppointment(id),
        doctorAPI.getAvailability(appointment?.doctorId || '')
      ])

      setAppointment(appointmentResponse.data)
      setDoctor(appointmentResponse.data.doctor)
      setAvailability(availabilityResponse.data || [])
    } catch (error) {
      toast.error('Failed to fetch appointment details')
      console.error('Appointment fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateChat = async () => {
    try {
      if (!doctor?.id) {
        toast.error('Doctor information not available')
        return
      }

      await createChatWithDoctor(doctor.id)
      navigate('/chat')
    } catch (error) {
      toast.error('Failed to create chat')
    }
  }

  const handleBookmarkDoctor = async () => {
    try {
      // Implement bookmark functionality
      toast.success('Doctor bookmarked!')
    } catch (error) {
      toast.error('Failed to bookmark doctor')
    }
  }

  const handleVideoCall = () => {
    if (appointment?.status === 'confirmed') {
      // Implement video call functionality
      toast.info('Video call functionality will be available soon')
    } else {
      toast.error('Video call is only available for confirmed appointments')
    }
  }

  const handlePhoneCall = () => {
    if (appointment?.status === 'confirmed') {
      // Implement phone call functionality
      toast.info('Phone call functionality will be available soon')
    } else {
      toast.error('Phone call is only available for confirmed appointments')
    }
  }

  const handleReschedule = async () => {
    try {
      if (!selectedSlot) {
        toast.error('Please select a new time slot')
        return
      }

      const rescheduleData = {
        appointmentId: appointment.id,
        newDate: selectedSlot.date,
        newTime: selectedSlot.time
      }

      await appointmentAPI.rescheduleAppointment(rescheduleData)
      toast.success('Appointment rescheduled successfully!')
      setRescheduleMode(false)
      fetchAppointmentDetails()
    } catch (error) {
      toast.error('Failed to reschedule appointment')
    }
  }

  const getDayAvailability = (day) => {
    return availability.filter(slot => 
      new Date(slot.date).toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase() === day
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (timeString) => {
    return new Date(timeString).toLocaleTimeString('en-US', {
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

  if (!appointment) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-500">Appointment not found</p>
          <Link to="/patientappointment" className="text-[#46B8E3] hover:underline">
            Go back to appointments
          </Link>
        </div>
      </div>
    )
  }

  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  return (
    <>  
      <div className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px" }}>
        <h3 className='pt-3 text-[12px] md:text-14px'>Home / Appointments / View</h3>
        <h1 className='text-[22px] md:text-[24px] py-2 font-semibold'>View Appointment</h1>
      </div>

      <div className="md:flex md:py-[20%] py-[39%] poppins mx-[5%]">
        <div className="">
          <PatientSidebar/>
        </div>

        <div className="md:w-[15%] md:mx-6">
          <img src={doctor?.profileImage || Surggy} className=" w-[100%] h-[390px] md:h-[20%]" alt="" />
          <div className="flex mt-3">
            <h1>Dr. {doctor?.firstName} {doctor?.lastName}</h1>
            {doctor?.isVerified && <CheckCircleIcon className="w-5 h-5 mx-2 text-[#0B6E4F]" />}
          </div>
          <p className="text-[10px] text-[#757575]">{doctor?.specialty}</p>

          <div className="flex my-3">
            <p className="text-yellow-500 text-[14px] pb-2">
              {"★".repeat(Math.floor(doctor?.rating || 0)) + "☆".repeat(5 - Math.floor(doctor?.rating || 0))}
            </p>
            <p>({doctor?.totalReviews || 0})</p>
          </div>

          <div className="flex gap-3">
            <img src={MoneyWallet} className="w-4 h-4" alt="" />
            <span className="text-[12px]">₦{doctor?.consultationFee?.toLocaleString()}</span>
            <img src={Caution} className="w-4 h-4" alt="" />
          </div>

          <div className="flex my-3 gap-3">
            <button 
              onClick={handleBookmarkDoctor}
              className="flex p-[2px] border rounded items-center gap-2 hover:bg-gray-100"
            >
              <BookmarkIcon className="h-4 w-4 " />
            </button>

            <button 
              onClick={handleCreateChat}
              className="flex border rounded p-[2px] items-center gap-2 hover:bg-gray-100"
            >
              <ChatBubbleLeftEllipsisIcon className="h-4 w-4 " />
            </button>

            <button 
              onClick={handlePhoneCall}
              className="flex border rounded p-[2px] items-center gap-2 hover:bg-gray-100"
            >
              <PhoneIcon className="h-4 w-4 " />
            </button>

            <button 
              onClick={handleVideoCall}
              className="flex border rounded p-[2px] items-center gap-2 hover:bg-gray-100"
            >
              <VideoCameraIcon className="h-4 w-4" />
            </button>
          </div>
        </div>  

        <div className="md:w-[60%] mx-4">
          <div className='bg-white rounded'>
            <div>
              <h1 className="text-[24px] font-bold md:text-[28px]">Appointment Details</h1>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-[14px] text-[#757575] md:text-[16px]">
                  Status: <span className={`font-semibold ${
                    appointment.status === 'confirmed' ? 'text-green-600' :
                    appointment.status === 'pending' ? 'text-yellow-600' :
                    appointment.status === 'cancelled' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {appointment.status.toUpperCase()}
                  </span>
                </p>
                <p className="text-[14px] text-[#757575] md:text-[16px]">
                  Your appointment is for <span className="text-black font-semibold">{formatDate(appointment.date)}</span>
                  ; from {formatTime(appointment.startTime)} to {formatTime(appointment.endTime)}
                </p>
                <p className="text-[14px] text-[#757575] md:text-[16px]">
                  Amount: <span className="text-[#46B8E3] font-semibold">₦{appointment.amount?.toLocaleString()}</span>
                </p>
              </div>

              <div className="flex text-[#46B8E3] mt-12 mb-4 text-[14px]">
                <button 
                  onClick={() => setRescheduleMode(!rescheduleMode)}
                  className="flex items-center hover:underline"
                >
                  <span>Reschedule appointment</span>
                  <FaEdit className="w-6 h-6 mx-2"/>
                </button>
              </div>
            </div>

            {rescheduleMode && (
              <>
                <div className="md:flex border text-center gap-3 p-5">
                  {days.map((day) => (
                    <div 
                      key={day}
                      className={`flex-col my-2 border rounded hover:bg-[#C52184] hover:text-white py-2 w-full md:w-1/7 cursor-pointer ${
                        selectedDay === day ? 'bg-[#C52184] text-white' : ''
                      }`}
                      onClick={() => setSelectedDay(day)}
                    >
                      <span className="">{day}</span>
                    </div>
                  ))}
                </div>

                <div className='border'>
                  <div className="flex border justify-between p-5">
                    <h1 className='text-[16px] font-semibold'>Available Time Slots</h1>
                  </div>
                  <div className="md:flex border text-[12px] text-center gap-3 p-5">
                    {getDayAvailability(selectedDay).map((slot, index) => (
                      <div 
                        key={index}
                        className={`flex-col my-2 border rounded py-2 w-full md:w-1/3 cursor-pointer ${
                          selectedSlot?.id === slot.id ? 'bg-[#46B8E3] text-white' : 'bg-[#D9D9D9] text-black'
                        }`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 flex gap-4">
                  <button 
                    onClick={handleReschedule}
                    className="bg-[#46B8E3] text-[12px] px-4 py-2 text-white rounded hover:bg-blue-600"
                    disabled={!selectedSlot}
                  >
                    Confirm Reschedule
                  </button>
                  <button 
                    onClick={() => setRescheduleMode(false)}
                    className="bg-gray-500 text-[12px] px-4 py-2 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div> 
        </div>
      </div>
    </>
  )
}
export default PatientViewAppointment