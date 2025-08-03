
import { apiRequest } from './api';

export const walletAPI = {
  // Wallet balance and transactions
  getBalance: () => apiRequest('/wallet/balance'),
  
  getTransactions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/wallet/transactions?${queryString}`);
  },
  
  // Wallet top-up
  initializeTopUp: (data) => apiRequest('/wallet/top-up/initialize', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  topUp: (data) => apiRequest('/wallet/top-up', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  verifyTopUp: (reference) => apiRequest('/wallet/top-up/verify', {
    method: 'POST',
    body: JSON.stringify({ reference }),
  }),
  
  // Wallet payments
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
  
  // Bank information
  getBanks: () => apiRequest('/wallet/banks'),
};
