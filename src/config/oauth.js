
export const OAUTH_CONFIG = {
  google: {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    redirectUri: `${window.location.origin}/oauth/callback`,
    scope: 'openid email profile',
  },
  apple: {
    clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
    redirectUri: `${window.location.origin}/oauth/callback`,
    scope: 'name email',
  }
};

export const getOAuthState = (provider, role) => {
  const state = {
    provider,
    role,
    timestamp: Date.now(),
    nonce: Math.random().toString(36).substring(2)
  };
  return btoa(JSON.stringify(state));
};

export const parseOAuthState = (stateString) => {
  try {
    return JSON.parse(atob(stateString));
  } catch (error) {
    return null;
  }
};
