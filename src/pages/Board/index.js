import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Todo from '../../Todo/Todo';
import { getBoardItems, createBoardItem, deleteBoardItem, updateBoardItem } from '../../api/items';

import './Style.css';

function Board() {
  const { boardId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getBoardItems(boardId).then(({ data }) => {
      setItems(data);
    });
  }, []);

  const handleCreateItem = (title) => {
    const data = {
      item: {
        title: title,
        done: false,
      },
    };

    createBoardItem(data, boardId).then(({ data }) => {
      setItems(prev => [...prev, data]);
    });
  };

  const handleDeletItem = (itemId) => {
    deleteBoardItem(boardId, itemId).then(() => {
      setItems(prev => prev.filter(x => x.id !== itemId));
    });
  };

   const handleUpdateItem = (itemId, done) => {
    const data = {
      item: {
        done: !done,
      },
    };

    updateBoardItem(data, boardId, itemId).then(() => {
      setItems(prev => prev.map(x => {
        if(x.id == itemId) {
          return {
            ...x,
            done: !x.done,
          };
        }
        return x;
      }));
    });
   };


  return (
    <div className='Day'>
      <div className="Day_conteiner">
        <Todo
          items={items}
          onCreateItem={handleCreateItem}
          onDeleteItem={handleDeletItem}
          onUpdateItem={handleUpdateItem}
        />
      </div>
    </div>
  );
};

export default Board;
