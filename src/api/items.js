import { HTTP } from './index';

export const getBoardItems = boardId => HTTP.get(`/boards/${boardId}/items`);
export const createBoardItem = (data, boardId) => HTTP.post(`/boards/${boardId}/items`, data);
export const deleteBoardItem = (boardId, itemId) => HTTP.delete(`/boards/${boardId}/items/${itemId}`);
export const updateBoardItem = (data, boardId, itemId) => HTTP.put(`/boards/${boardId}/items/${itemId}`, data);
