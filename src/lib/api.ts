import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// auth
export const register = (data: { email: string; password: string; name: string }) =>
  api.post('/auth/register', data);

export const login = (data: { email: string; password: string }) =>
  api.post('/auth/login', data);

// babies
export const getBabies = () => api.get('/babies');
export const createBaby = (data: { name: string; birthDate: string; gender?: string }) =>
  api.post('/babies', data);
export const getBaby = (id: number) => api.get(`/babies/${id}`);

// feeding
export const createFeeding = (data: {
  babyId: number;
  type: string;
  amountMl?: number;
  durationMin?: number;
  fedAt: string;
}) => api.post('/feeding', data);
export const getTodayFeedings = (babyId: number) =>
  api.get(`/feeding/today/${babyId}`);
export const getFeedingStats = (babyId: number) =>
  api.get(`/feeding/stats/${babyId}`);

// meal
export const createMeal = (data: {
  babyId: number;
  menu: string;
  amountG?: number;
  reaction?: string;
  memo?: string;
  eatenAt: string;
}) => api.post('/meal', data);
export const getTodayMeals = (babyId: number) =>
  api.get(`/meal/today/${babyId}`);
export const getMealStats = (babyId: number) =>
  api.get(`/meal/stats/${babyId}`);

// food-guide
export const getFoodGuide = (ageMonths: number) =>
  api.get(`/food-guide/${ageMonths}`);