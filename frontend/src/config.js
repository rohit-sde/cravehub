const backendUrl = 'http://localhost:1001'?.replace(/\/$/, '');

export const CONFIG = {
  apiUrl: process.env.REACT_APP_NODE_ENV === 'production' ? '' : backendUrl,
};
