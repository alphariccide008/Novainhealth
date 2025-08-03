
import { apiRequest } from './api';

export const notificationAPI = {
  // Notification preferences
  getPreferences: () => apiRequest('/notifications/preferences'),
  
  updatePreferences: (data) => apiRequest('/notifications/preferences', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  // Notifications
  getNotifications: (params = {}) => {
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
