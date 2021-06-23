import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Todo from '../../Todo/Todo';
import { getBoardItems, createItem } from '../../api/items'

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

   return (
       <div>
         <div className='Day'>
            <a className='home' href='/'><i className="fas fa-home"></i></a>
            <div className="Day_conteiner">
               <Todo 
                  items={items}
                  onCreateItem={handleCreateItem}
               /> 
            </div>
         </div>
       </div>

   )
}


export default Board;