const backendUrl = 'http://localhost:5063'?.replace(/\/$/, '');

export const CONFIG = {
  apiUrl: process.env.REACT_APP_NODE_ENV === 'production' ? '' : backendUrl,
};
