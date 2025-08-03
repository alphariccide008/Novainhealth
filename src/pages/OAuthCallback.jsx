
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApiIntegration } from '../hooks/useApiIntegration';
import toast from 'react-hot-toast';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { handleGoogleCallback, handleAppleCallback } = useApiIntegration();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const provider = searchParams.get('provider');
      const role = searchParams.get('role');

      if (!code || !state) {
        toast.error('Invalid OAuth callback');
        navigate('/');
        return;
      }

      try {
        let response;
        if (provider === 'google') {
          response = await handleGoogleCallback(code, state);
        } else if (provider === 'apple') {
          response = await handleAppleCallback(code, state);
        }

        if (response) {
          await login(response);
          
          // Redirect based on role
          if (role === 'doctor') {
            navigate('/doctordashboard');
          } else if (role === 'patient') {
            navigate('/patientdashboard');
          } else {
            navigate('/');
          }
        }
      } catch (error) {
        toast.error('OAuth authentication failed');
        navigate('/');
      }
    };

    handleCallback();
  }, [searchParams, navigate, login, handleGoogleCallback, handleAppleCallback]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#46B8E3]"></div>
        <p className="mt-4">Completing authentication...</p>
      </div>
    </div>
  );
};

export default OAuthCallback;
