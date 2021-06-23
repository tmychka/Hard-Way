import {HTTP} from './index';

export const getBoardItems = (id) => HTTP.get(`boards/${id}/items`);   
export const createItem = (data) => HTTP.post('/items', data);   
