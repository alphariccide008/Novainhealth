// API Configuration for Vite
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://novain-health-api-u33pl.ondigitalocean.app',
  ENDPOINTS: {
    AUTH: '/auth',
    PROFILE: '/profile',
    APPOINTMENTS: '/appointments',
    WALLET: '/wallet',
    CHAT: '/chat',
    NOTIFICATIONS: '/notifications',
    RATING: '/rating',
    ADMIN: '/admin',
    LANGUAGE: '/language'
  }
};

// Request timeout
export const REQUEST_TIMEOUT = 30000;

// Token storage keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_DATA: 'userData',
  USER_ROLE: 'userRole'
};
