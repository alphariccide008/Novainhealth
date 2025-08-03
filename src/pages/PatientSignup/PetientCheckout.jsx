import React, { useState, useEffect } from "react"
import '../../components/components.css'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useApiIntegration } from '../../hooks/useApiIntegration'
import { walletAPI } from '../../services/walletApi'
import { appointmentAPI } from '../../services/appointmentApi'
import toast from 'react-hot-toast'

const PatientCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [appointmentData, setAppointmentData] = useState(null)
  const { initiatePayment, confirmPayment } = useApiIntegration()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Get appointment data from location state or localStorage
    const data = location.state?.appointmentData || JSON.parse(localStorage.getItem('appointmentData') || '{}')
    setAppointmentData(data)

    if (!data || !data.amount) {
      toast.error('No appointment data found. Please book an appointment first.')
      navigate('/requestappointment')
    }
  }, [location.state, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method)
  }

  const handleWalletPayment = async () => {
    try {
      setLoading(true)

      // Check wallet balance first
      const walletBalance = await walletAPI.getBalance()

      if (walletBalance.data.balance < appointmentData.amount) {
        toast.error('Insufficient wallet balance. Please top up your wallet.')
        return
      }

      // Process wallet payment
      const paymentData = {
        appointmentId: appointmentData.id,
        amount: appointmentData.amount,
        paymentMethod: 'wallet'
      }

      const response = await appointmentAPI.payForAppointment(paymentData)

      if (response.data.success) {
        toast.success('Payment successful!')
        navigate('/success', { 
          state: { 
            appointmentData,
            paymentData: response.data 
          }
        })
      }
    } catch (error) {
      toast.error('Wallet payment failed: ' + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleCardPayment = async () => {
    try {
      setLoading(true)

      // Validate form data
      if (!formData.nameOnCard || !formData.cardNumber || !formData.expiryMonth || !formData.expiryYear || !formData.cvv) {
        toast.error('Please fill in all card details')
        return
      }

      // Initialize payment with Paystack
      const paymentData = {
        amount: appointmentData.amount,
        email: appointmentData.patientEmail,
        appointmentId: appointmentData.id,
        callback_url: `${window.location.origin}/success`
      }

      const response = await initiatePayment(paymentData)

      if (response.data.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = response.data.authorization_url
      }
    } catch (error) {
      toast.error('Payment initiation failed: ' + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!termsAccepted) {
      toast.error('Please accept the terms and conditions')
      return
    }

    if (!appointmentData) {
      toast.error('No appointment data found')
      return
    }

    if (paymentMethod === 'wallet') {
      await handleWalletPayment()
    } else {
      await handleCardPayment()
    }
  }

  if (!appointmentData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B8E3]"></div>
      </div>
    )
  }

  return (
   <>
     <div className="poppins md:mx-[30%] px-4 pt-[30%] py-10  md:py-[20%]"> 
      <div>
        <h1 className="text-[18px] pb-10 font-bold">Checkout</h1>

        {/* Appointment Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Appointment Summary</h3>
          <p className="text-sm text-gray-600">Doctor: {appointmentData.doctorName}</p>
          <p className="text-sm text-gray-600">Date: {appointmentData.date}</p>
          <p className="text-sm text-gray-600">Time: {appointmentData.time}</p>
          <p className="text-lg font-bold text-[#46B8E3]">Amount: ₦{appointmentData.amount?.toLocaleString()}</p>
        </div>

        <h4 className="text-[12px] pb-5">Choose your preferred payment method</h4>
        <hr />

        <form onSubmit={handleSubmit} className="border rounded px-2 text-[12px] pt-10 shadow-md">
          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input 
                type="radio" 
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => handlePaymentMethodChange('card')}
                className="mr-2"
              />
              <span className="text-[12px]">Credit/Debit Card</span>
            </label>

            <label className="flex items-center mb-2">
              <input 
                type="radio" 
                name="paymentMethod"
                value="wallet"
                checked={paymentMethod === 'wallet'}
                onChange={() => handlePaymentMethodChange('wallet')}
                className="mr-2"
              />
              <span className="text-[12px]">Wallet Payment</span>
            </label>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <>
              <div className="md:flex gap-6 pb-4">
                <div className="flex-col border md:w-1/2">
                  <input 
                    type="text" 
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full border py-2 px-4" 
                    placeholder="Name on card"
                    required
                  />
                </div>
                <div className="flex-col border md:w-1/2">
                  <input 
                    type="text" 
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full border py-2 px-4" 
                    placeholder="Card Number"
                    maxLength="19"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6 pb-4">
                <div className="flex-col border md:w-1/3">
                  <input 
                    type="text" 
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    className="w-full border py-2 px-4" 
                    placeholder="MM"
                    maxLength="2"
                    required
                  />
                </div>
                <div className="flex-col border md:w-1/3">
                  <input 
                    type="text" 
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    className="w-full border py-2 px-4" 
                    placeholder="YY"
                    maxLength="2"
                    required
                  />
                </div>
                <div className="flex-col border md:w-1/3">
                  <input 
                    type="text" 
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full border py-2 px-4" 
                    placeholder="CVV"
                    maxLength="4"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Wallet Payment Info */}
          {paymentMethod === 'wallet' && (
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-blue-700">
                You will pay from your wallet balance. Make sure you have sufficient funds.
              </p>
            </div>
          )}

          <label className="flex items-center my-5">
            <input 
              type="checkbox" 
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
              required
            />
            <span className="text-[12px]">
              I have accepted and read the <Link to='/terms' className="text-[#46B8E3] underline">Terms and conditions</Link>
            </span>
          </label>

          <div className="flex justify-center items-center">
            <button 
              type="submit"
              disabled={loading || !termsAccepted}
              className={`px-16 py-2 rounded text-white ${
                loading || !termsAccepted 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#46B8E3] hover:bg-blue-600'
              }`}
            >
              {loading ? 'Processing...' : `Pay ₦${appointmentData.amount?.toLocaleString()}`}
            </button>
          </div>
        </form>
      </div>
     </div>
   </>
  )
}
export default PatientCheckout