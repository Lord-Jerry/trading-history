import api from './api';
import endpoints from '../constants/api';

export const loginService = (body) => api().post(endpoints.login(), body);
export const registerUserService = (body) => api().post(endpoints.register(), body);
export const currentUserService = (token) => api(token).get(endpoints.currentUser());
