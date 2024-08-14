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
export const updateUserInfo = (values) => {
  return apiWrapper(() => api.patch('/user/updateInformation', values));
};
export const updateProfileImage = (values) => {
  return apiWrapper(() => api.post('/user//setProfileImage', values));
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
export const likeVideo= (id) => {
  return apiWrapper(() => api.post(`/video/likeVideo/${id}`));
};
export const unlikeVideo= (id) => {
  return apiWrapper(() => api.post(`/video/unLikeVideo/${id}`));
};
export const commentVideo= (id,values) => {
  return apiWrapper(() => api.post(`/video/commentOnVideo/${id}`,values));
};
export const getUserVideos = () => {
  return apiWrapper(() =>api.get('/video/getVideosByUser'));
};

//trainer
export const getUserTrainers = () => {
  return apiWrapper(() =>api.get('/trainer/getAllTrainer'));
};
export const updateTrainer = (values) => {
  return apiWrapper(() => api.post('/subscription/updateTrainer', values));
};
export const getUserTrainerClients = () => {
  return apiWrapper(() =>api.get('/trainer/getClients'));
};
export const getTrainerDasboard = () => {
  return apiWrapper(() =>api.get('/trainer/getTrainerDashboard'));
};

//chat
export const getChatPeople = () => {
  return apiWrapper(() =>api.get('/chat/userChats'));
};
export const sendMessage= (values) => {
  return apiWrapper(() => api.post('/message/addMessage',values));
};
export const getAllMessages= (values) => {
  return apiWrapper(() => api.post('/message/getMessages',values));
};

//diePlans
export const getDietPlans = () => {
  return apiWrapper(() =>api.get('/exerciseDiet/getDailyPlans'));
};
export const getDay= () => {
  return apiWrapper(() =>api.get('/exerciseDiet//getDay'));
};

