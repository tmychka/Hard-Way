import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Todo from '../../Todo/Todo';
import { getBoardItems, createItem, deleteItem, updateItem } from '../../api/items'

import './Style.css';

const Board = () => {
   const { id } = useParams();

   const [items, setItems] = useState([]);

   useEffect(() => {
      getBoardItems(id).then((res) => { 
         setItems(res.data.data)
      })
   }, [])

   const handleCreateItem = (title) => {
      const data = {
         data: {
            attributes: {
               title: title,
               done: false,
               board_id: id 
            }
         }
      };

      createItem(data).then((res) => {
         setItems(prev => [...prev, res.data.data])
      })
   }

   const handleDeletItem = (id) => {
      deleteItem(id).then(() => {
         setItems(prev => prev.filter(x => x.id !== id))
      })
   }

   const handleUpdateItem = (id, done) => {
      const data = {
         data: {
            attributes: {
               done: !done,
            }
         }
      }

      updateItem(id, data).then(() => {
         setItems(prev => prev.map(x => {
            if(x.id == id) {
               return {
                  id: x.id,
                  attributes: {
                     done: !x.attributes.done,
                     title: x.attributes.title
                  }
               }
            } 
            return x
         }))
      })
   }
   

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
   )
}


export default Board;