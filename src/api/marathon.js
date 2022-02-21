import { HTTP } from './index';

export const getMarathons = () => HTTP.get('/marathons');
export const getMarathonById = id => HTTP.get(`marathons/${id}`);
export const getMarathonBoards = id => HTTP.get(`marathons/${id}/boards`);
export const createMarathon = data => HTTP.post('/marathons', data);
export const removeMarathon = id => HTTP.delete(`/marathons/${id}`);
export const deleteBoard = id => HTTP.delete(`/boards/${id}`);
