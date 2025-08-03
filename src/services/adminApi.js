
import { apiRequest } from './api';

export const adminAPI = {
  // Dashboard
  getDashboard: () => apiRequest('/admin/dashboard'),
  
  // Admin management
  createAdmin: (data) => apiRequest('/admin/create-admin', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Transactions
  getTransactions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/transactions?${queryString}`);
  },
  
  // User management
  getAllDoctors: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/doctors?${queryString}`);
  },
  
  getAllPatients: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/patients?${queryString}`);
  },
  
  getAllAppointments: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/appointments?${queryString}`);
  },
  
  verifyDoctor: (id) => apiRequest(`/admin/doctors/${id}/verify`, {
    method: 'PATCH',
  }),
};
