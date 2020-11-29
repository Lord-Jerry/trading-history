import api from './api';
import endpoints from '../constants/api';

export const loginService = (body) => api().post(endpoints.login(), body);
