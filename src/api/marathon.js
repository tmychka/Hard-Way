import {HTTP} from './index';

export const getMarathon = () => HTTP.get('marathons');
export const removeMarathons = (id) => HTTP.delete(`marathons/${id}`);
export const createMarathon = (data) => HTTP.post('/marathons', data);
export const createMarathonTask = (data, id) => HTTP.post(`/marathons/${id}`, data);
export const getMarathonById = (id) => HTTP.get(`marathons/${id}`);

// export const get = () => HTTP.get('boards');
