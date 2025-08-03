import { apiRequest } from './api';

export const appointmentAPI = {
  // Create and manage appointments
  createAppointment: (data) => apiRequest('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getDoctorAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/doctor?${queryString}`);
  },

  getPatientAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/patient?${queryString}`);
  },

  // Update appointment status
  updateStatus: (id, data) => apiRequest(`/appointments/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  // Get today's appointments
  getTodaysAppointments: () => apiRequest('/appointments/today'),

  // Update appointment status (different endpoint)
  updateAppointmentStatus: (id, data) => apiRequest(`/appointments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  // Doctor availability
  setAvailability: (data) => apiRequest('/appointments/availability', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getAvailability: () => apiRequest('/appointments/availability'),

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

  // Attendance verification
  verifyPatientAttendance: (appointmentId, otp) => apiRequest(`/appointments/${appointmentId}/verify-patient-attendance`, {
    method: 'GET',
    body: JSON.stringify({ patientOtp: otp }),
  }),

  verifyDoctorAttendance: (appointmentId, otp) => apiRequest(`/appointments/${appointmentId}/verify-doctor-attendance`, {
    method: 'POST',
    body: JSON.stringify({ doctorOtp: otp }),
  }),

  // Admin functions
  expireUnpaidAppointments: () => apiRequest('/appointments/admin/expire-unpaid', {
    method: 'POST',
  }),

  // Payment testing
  testPaystackConnection: () => apiRequest('/appointments/test/paystack-connection'),

  paystackWebhook: (data) => apiRequest('/appointments/webhook/paystack', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};