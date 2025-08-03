import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add this line */}
    </AuthProvider>
  </StrictMode>,
);
