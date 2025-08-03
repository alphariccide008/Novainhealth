
import { apiRequest } from './api';

export const chatAPI = {
  // Chat management
  createChat: (doctorId) => apiRequest('/chat', {
    method: 'POST',
    body: JSON.stringify({ doctorId }),
  }),
  
  getAllChats: () => apiRequest('/chat'),
  
  getChatMessages: (chatId, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/chat/${chatId}/messages?${queryString}`);
  },
  
  getChatParticipants: (chatId) => apiRequest(`/chat/${chatId}/participants`),
};
