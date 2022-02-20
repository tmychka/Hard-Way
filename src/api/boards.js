import { HTTP } from './index';

export const getBoards = () => HTTP.get('/boards/standalone_boards');
export const createBoard = data => HTTP.post('/boards', data);
export const deleteBoard = id => HTTP.delete(`/boards/${id}`);

export const getActiveBoards = () => HTTP.get('/boards/todays_boards');
