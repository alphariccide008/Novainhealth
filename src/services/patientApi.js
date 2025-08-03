
import { apiRequest } from './api';

export const patientAPI = {
  // Profile management
  updateProfile: (data) => apiRequest('/profile/patient', {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  
  // Appointments
  createAppointment: (data) => apiRequest('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  getAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/patient?${queryString}`);
  },
  
  // Payment
  initiatePayment: (appointmentId) => apiRequest(`/appointments/${appointmentId}/payment/initiate`, {
    method: 'POST',
  }),
  
  confirmPayment: (reference) => apiRequest(`/appointments/payment/confirm/${reference}`, {
    method: 'POST',
  }),
  
  confirmAppointment: (appointmentId) => apiRequest(`/appointments/${appointmentId}/confirm`, {
    method: 'POST',
  }),
  
  // Verification
  verifyAttendance: (appointmentId, otp) => apiRequest(`/appointments/${appointmentId}/verify-patient-attendance`, {
    method: 'POST',
    body: JSON.stringify({ patientOtp: otp }),
  }),
  
  // Ratings
  createRating: (data) => apiRequest('/rating', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  getRatings: () => apiRequest('/rating'),
};
