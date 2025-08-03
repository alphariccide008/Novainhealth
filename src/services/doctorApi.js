import { apiRequest } from './api';

export const doctorAPI = {
  // Profile management
  updateProfile: (data) => apiRequest('/profile/doctor', {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  updateConsultationFees: (fees) => apiRequest('/profile/doctor/consultation-fees', {
    method: 'PATCH',
    body: JSON.stringify(fees),
  }),

  getMyPatients: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/profile/doctor/my-patients?${queryString}`);
  },

  getTransactions: () => apiRequest('/profile/doctor/transactions'),

  // Appointments
  getAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/doctor?${queryString}`);
  },

  getTodaysAppointments: () => apiRequest('/appointments/today'),

  updateAppointmentStatus: (id, status) => apiRequest(`/appointments/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),

  // Availability
  setAvailability: (data) => apiRequest('/appointments/availability', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getAvailability: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/profile/doctor/availability?${queryString}`);
  },

  // Get doctor profile
  getProfile: () => apiRequest('/profile/doctor'),

  // Verify doctor attendance for appointment
  verifyAttendance: (appointmentId, data) => apiRequest(`/appointments/${appointmentId}/verify-doctor-attendance`, {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  addAvailabilitySlot: (data) => apiRequest('/appointments/availability/slot', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  updateAvailabilitySlot: (slotId, data) => apiRequest(`/appointments/availability/slot/${slotId}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  deleteAvailabilitySlot: (slotId) => apiRequest(`/appointments/availability/slot/${slotId}`, {
    method: 'DELETE',
  }),

  // Verification
  verifyDoctorAttendance: (appointmentId, otp) => apiRequest(`/appointments/${appointmentId}/verify-doctor-attendance`, {
    method: 'POST',
    body: JSON.stringify({ doctorOtp: otp }),
  }),
};