const backendUrl = 'http://localhost:5064'?.replace(/\/$/, '');

export const CONFIG = {
  apiUrl: process.env.REACT_APP_NODE_ENV === 'production' ? '' : backendUrl,
};

console.log(process.env);
