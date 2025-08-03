
import { apiRequest } from './api';

export const ratingAPI = {
  // Rating management
  createRating: (data) => apiRequest('/rating', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  getRatings: () => apiRequest('/rating'),
};
