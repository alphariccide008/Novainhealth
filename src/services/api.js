import { API_CONFIG, STORAGE_KEYS } from '../config/api';
import toast from 'react-hot-toast';

// Get token from localStorage
const getAuthToken = () => localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);


// Utilities to get/save tokens
const getTokens = () => ({
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
});

const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem('accessToken', accessToken);
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
  }
};

// Main API handler
export const apiRequest = async (endpoint, options = {}, retry = true) => {
  const { accessToken, refreshToken } = getTokens();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      // Token expired error handling
      if (
        data.name === 'TokenExpiredError' &&
        retry &&
        refreshToken
      ) {
        // Try refreshing the token
        try {
          const refreshRes = await fetch(`${API_CONFIG.BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
          });

          const refreshData = await refreshRes.json();

          if (refreshRes.ok && refreshData?.data?.accessToken) {
            saveTokens({
              accessToken: refreshData.data.accessToken,
              refreshToken: refreshData.data.refreshToken,
            });

            // Retry original request with new token
            return await apiRequest(endpoint, options, false);
          } else {
            throw new Error('Session expired. Please log in again.');
          }
        } catch (err) {
          toast.error('Session expired. Please log in again.');
          localStorage.clear();
          window.location.href = '/login';
          throw err;
        }
      }

      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication APIs
export const authAPI = {
  signup: (userData) => apiRequest('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),

  verifyEmail: (data) => apiRequest('/auth/verify-email', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  triggerVerifyEmail: (email) => apiRequest('/auth/trigger-verify-email', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),

  forgetPassword: (email) => apiRequest('/auth/forget-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),

  forgotPasswordReset: (data) => apiRequest('/auth/forgot-password-reset', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  resetPassword: (newPassword) => apiRequest('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify({ newPassword }),
  }),

  triggerVerifySms: (phone) => apiRequest('/auth/trigger-verify-sms', {
    method: 'POST',
    body: JSON.stringify({ phone }),
  }),

  verifySms: (data) => apiRequest('/auth/verify-sms', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  forgotPasswordReset: (data) => apiRequest('/auth/forgot-password-reset', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Test Paystack connection
  testPaystackConnection: () => apiRequest('/appointments/test/paystack-connection'),

  // Paystack webhook
  paystackWebhook: () => apiRequest('/appointments/webhook/paystack'),

  // Expire unpaid appointments (admin)
  expireUnpaidAppointments: () => apiRequest('/appointments/admin/expire-unpaid', {
    method: 'POST',
  }),
};

// Profile APIs
export const profileAPI = {
  updatePatientProfile: (data) => apiRequest('/profile/patient', {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  updateDoctorProfile: (data) => apiRequest('/profile/doctor', {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  updateConsultationFees: (fees) => apiRequest('/profile/doctor/consultation-fees', {
    method: 'PATCH',
    body: JSON.stringify(fees),
  }),

  getMyPatients: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/profile/doctor/my-patients?${queryString}`);
  },

  getDoctorTransactions: () => apiRequest('/profile/doctor/transactions'),

  updateConsultationFees: (fees) => apiRequest('/profile/doctor/consultation-fees', {
    method: 'PATCH',
    body: JSON.stringify(fees),
  }),
};

// Wallet APIs
export const walletAPI = {
  getBalance: () => apiRequest('/wallet/balance'),

  getTransactions: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/wallet/transactions?${queryString}`);
  },

  initializeTopUp: (data) => apiRequest('/wallet/top-up/initialize', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  verifyTopUp: (reference) => apiRequest('/wallet/top-up/verify', {
    method: 'POST',
    body: JSON.stringify({ reference }),
  }),

  payService: (data) => apiRequest('/wallet/pay-service', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  requestPayout: (data) => apiRequest('/wallet/payout/request', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  verifyPayout: (reference) => apiRequest(`/wallet/payout/verify/${reference}`, {
    method: 'POST',
  }),

  getBanks: () => apiRequest('/wallet/banks'),
};

// Appointments APIs
export const appointmentsAPI = {
  createAppointment: (data) => apiRequest('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getDoctorAppointments: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/doctor?${queryString}`);
  },

  getPatientAppointments: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/appointments/patient?${queryString}`);
  },

  getTodaysAppointments: () => apiRequest('/appointments/today'),

  updateAppointmentStatus: (id, data) => apiRequest(`/appointments/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  setAvailability: (data) => apiRequest('/appointments/availability', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  addAvailabilitySlot: (data) => apiRequest('/appointments/availability/slot', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  deleteAvailabilitySlot: (slotId) => apiRequest(`/appointments/availability/slot/${slotId}`, {
    method: 'DELETE',
  }),

  initiatePayment: (id) => apiRequest(`/appointments/${id}/payment/initiate`, {
    method: 'POST',
  }),

  confirmPayment: (reference) => apiRequest(`/appointments/payment/confirm/${reference}`, {
    method: 'POST',
  }),

  confirmAppointment: (id) => apiRequest(`/appointments/${id}/confirm`, {
    method: 'POST',
  }),

  verifyPatientAttendance: (id, otp) => apiRequest(`/appointments/${id}/verify-patient-attendance`, {
    method: 'GET',
    body: JSON.stringify({ patientOtp: otp }),
  }),

  verifyDoctorAttendance: (id, otp) => apiRequest(`/appointments/${id}/verify-doctor-attendance`, {
    method: 'POST',
    body: JSON.stringify({ doctorOtp: otp }),
  }),

  getDoctorAvailability: () => apiRequest('/appointments/availability'),

  updateAvailabilitySlot: (slotId, data) => apiRequest(`/appointments/availability/slot/${slotId}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),

  expireUnpaidAppointments: () => apiRequest('/appointments/admin/expire-unpaid', {
    method: 'POST',
  }),

  testPaystackConnection: () => apiRequest('/appointments/test/paystack-connection'),

  paystackWebhook: (data) => apiRequest('/appointments/webhook/paystack', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

// Chat APIs
export const chatAPI = {
  createChat: (doctorId) => apiRequest('/chat', {
    method: 'POST',
    body: JSON.stringify({ doctorId }),
  }),

  getAllChats: () => apiRequest('/chat'),

  getChatMessages: (chatId, params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/chat/${chatId}/messages?${queryString}`);
  },

  getChatParticipants: (chatId) => apiRequest(`/chat/${chatId}/participants`),
};

// Notifications APIs
export const notificationsAPI = {
  getPreferences: () => apiRequest('/notifications/preferences'),

  updatePreferences: (data) => apiRequest('/notifications/preferences', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),

  getNotifications: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/notifications?${queryString}`);
  },

  getUnreadCount: () => apiRequest('/notifications/unread-count'),

  markAsRead: (id) => apiRequest(`/notifications/${id}/mark-read`, {
    method: 'POST',
  }),

  markAllAsRead: () => apiRequest('/notifications/mark-all-read', {
    method: 'POST',
  }),
};

// Rating APIs
export const ratingAPI = {
  createRating: (data) => apiRequest('/rating', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getRatings: () => apiRequest('/rating'),
};

// Language APIs
export const languageAPI = {
  getLanguages: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/language?${queryString}`);
  },

  getLanguageById: (id) => apiRequest(`/language/${id}`),
};

// Admin APIs
export const adminAPI = {
  getDashboard: () => apiRequest('/admin/dashboard'),

  createAdmin: (data) => apiRequest('/admin/create-admin', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getTransactions: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/transactions?${queryString}`);
  },

  getAllDoctors: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/doctors?${queryString}`);
  },

  getAllPatients: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/patients?${queryString}`);
  },

  getAllAppointments: (params) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/appointments?${queryString}`);
  },

  verifyDoctor: (id) => apiRequest(`/admin/doctors/${id}/verify`, {
    method: 'PATCH',
  }),
};

// Additional missing endpoints
export const paymentAPI = {
  paystackWebhook: (data) => apiRequest('/paystack/webhook', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};

// Auth helper functions
export const authHelpers = {
  setToken: (token) => localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token),
  removeToken: () => localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
  isAuthenticated: () => !!getAuthToken(),
  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
  },
};