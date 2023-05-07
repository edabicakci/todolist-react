import React, { useState, useEffect } from 'react';
import { service } from '../network/service';

import ToDoListItem from './ToDoListItem';

function ToDoList() {
  const [todos,setTodos] = useState([]);

  const getData =  () => {
    
    setTodos(service.get(""));
    
  }

  useEffect(() => {
    getData()
  }, [])
  return (

    <>

{todos.map((todo,key) =>
       
       <ToDoListItem key = {key} todo = {todo}/> )};
    
    </>


   


    

   
    
  );
}

export default ToDoListItem;
