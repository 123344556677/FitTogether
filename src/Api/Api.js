// api.js
import axios from 'axios';
import { createAxiosInstance, fileInstance } from './ApiInstances';
import apiWrapper from './ApiWrapper';

const url = process.env.REACT_APP_API_URL;

const api = createAxiosInstance();
// const str=stripeInstance
const pdfFile = fileInstance();

// auth
export const login = (values) => {
  return apiWrapper(() => api.post('/user/login', values));
};
export const register = (values) => {
  return apiWrapper(() => api.post('/user/signup', values));
};
export const getQuery = () => {
  return apiWrapper(() => api.get('/user/getSignupQuestions'));
};
export const updateQuery= (values,token) => {
  return apiWrapper(() => axios.patch(`${url}/user/updateSignupQuestions`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }));
};
export const getUser = (id) => {
  return apiWrapper(() =>api.get(`/user/getUser/${id}`));
};

//subscription
export const makeSubscription = (values) => {
  return apiWrapper(() => api.post('/subscription/createSubscription', values));
};
export const getSubscription = () => {
  return apiWrapper(() =>api.get('/subscription/getSubscription'));
};

//community
export const uploadVideo= (values) => {
  return apiWrapper(() => api.post('/video/uploadVideo', values));
};
export const getVideos = () => {
  return apiWrapper(() =>api.get('/video/getVideos'));
};

