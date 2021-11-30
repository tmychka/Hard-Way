import {HTTP} from './index';

export const getBoardItems = (id) => HTTP.get(`boards/${id}/items`);   
export const createItem = (data) => HTTP.post('/items', data);   
export const deleteItem = (id) => HTTP.delete(`/items/${id}`);   
export const updateItem = (id, data) => HTTP.put(`/items/${id}`, data);   