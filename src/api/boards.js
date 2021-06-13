import {HTTP} from './index'

export const getBoards = () => HTTP.get('boards');
export const removeBoard = (id) => HTTP.delete(`boards/${id}`);