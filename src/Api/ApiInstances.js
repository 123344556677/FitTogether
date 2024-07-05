import axios from 'axios';

const fileInstance = () => {
  const jwtToken = localStorage.getItem('token');
  
  if(!jwtToken) {
    // console.log('JWT Token is null or undefined');
  }

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return instance;
};
const createAxiosInstance= () => {
  const jwtToken = localStorage.getItem('token');

  if(!jwtToken) {
    // console.log('JWT Token is null or undefined');
  }
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      
    },
    // withCredentials: true,
  });

  return instance;
};
const stripeInstance= () => {
   const API_KEY = process.env.REACT_APP_STRIPE_API_KEY;

  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      
    },
    // withCredentials: true,
  });

  return instance;
};

export { fileInstance, createAxiosInstance,stripeInstance };
