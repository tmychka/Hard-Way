import {HTTP} from './index';

export const getBoards = () => HTTP.get('boards');
export const getActiveBoards = () => HTTP.get('boards/active');   
export const removeBoard = (id) => HTTP.delete(`boards/${id}`);
export const createBoard = (data) => HTTP.post('boards', data);
