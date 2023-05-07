import React, { useState, useEffect } from 'react';
import { service } from './network/service';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToDoList from './components/ToDoList';

function App() {

  const [todoText,setTodoText] = useState("");

  const addTodo =  () => {
    
    service.post("", todoText);
    
  }

  return (
    <div className="App">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Add To Do" variant="outlined" onChange={(e) => {
        setTodoText(e.target.value);
      }}/>
      <Button variant="contained" onClick= {addTodo}>Add</Button>
     
    </Box>

    <ToDoList/>
        
    </div>
  );
}

export default App;
