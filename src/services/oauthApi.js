
import { API_CONFIG } from '../config/api';
import { apiRequest } from './api';

export const oauthAPI = {
  // Google OAuth
  googleSignup: (userData) => apiRequest('/auth/google/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  googleLogin: (credentials) => apiRequest('/auth/google/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),

  // Apple OAuth
  appleSignup: (userData) => apiRequest('/auth/apple/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  appleLogin: (credentials) => apiRequest('/auth/apple/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),

  // Get OAuth redirect URLs
  getGoogleAuthUrl: (role) => apiRequest(`/auth/google/url?role=${role}`),
  getAppleAuthUrl: (role) => apiRequest(`/auth/apple/url?role=${role}`),

  // Handle OAuth callbacks
  handleGoogleCallback: (code, state) => apiRequest('/auth/google/callback', {
    method: 'POST',
    body: JSON.stringify({ code, state }),
  }),

  handleAppleCallback: (code, state) => apiRequest('/auth/apple/callback', {
    method: 'POST',
    body: JSON.stringify({ code, state }),
  }),
};
