import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToDoListItem from './components/ToDoListItem';

function App() {
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
      <TextField id="outlined-basic" label="Add To Do" variant="outlined" />
      <Button variant="contained">Add</Button>
     
    </Box>

    <ToDoListItem/>
        
    </div>
  );
}

export default App;
