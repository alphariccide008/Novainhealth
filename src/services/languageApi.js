import { apiRequest } from './api';

export const languageAPI = {
  // Fetch paginated list of languages (you can pass page, limit, etc.)
  getLanguages: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/language?${queryString}`);
  },

  // Fetch language by ID
  getLanguageById: (id) => apiRequest(`/language/${id}`),

  // Optional: Alias for getLanguages (if you still want to call `getAll()`)
  getAll: () => languageAPI.getLanguages({}),
};
