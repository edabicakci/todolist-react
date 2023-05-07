import { useState, useContext } from 'react';
import { service } from './network/service';
import RefreshContext from "./contexts/RefreshContext";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToDoList from './components/ToDoList';

function App() {

  const [todoText,setTodoText] = useState("");
  const { refresh, setRefresh } = useContext(RefreshContext);

  const addTodo =  async () => {

    const newTodo = {
      "todo": todoText
    };
   
   await service.post( newTodo );
   setRefresh(!refresh)
  
    
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
