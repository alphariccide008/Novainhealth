// src/pages/ApiSpecViewer.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ApiSpecViewer() {
  useEffect(() => {
    axios
      .get('https://https://novain-health-api-u33pl.ondigitalocean.app/api/auth/signup')
      .then((res) => {
        console.log('OpenAPI Spec:', res.data);
      })
      .catch((err) => {
        console.error('Failed to load spec:', err);
      });
  }, []);

  return (
    <div className='pt-[20%]'>
      <h2>Check console for OpenAPI JSON</h2>
    </div>
  );
}
