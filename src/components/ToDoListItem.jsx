import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { service } from '../network/service';

function ToDoListItem({todo}) {

  const url = "https://63fpbddxa4.execute-api.eu-central-1.amazonaws.com/dev/todos";

  const deleteTodo = async () =>{
    service.delete(`/${todo.id}`)
  }
  return (

    <>

<ListItem disablePadding>
            
              <ListItemIcon>
            
              </ListItemIcon>
              <ListItemText primary={todo.todo} />
           
<Button variant="contained" onClick={deleteTodo}>Delete</Button>
          </ListItem>

    
    </>
   
    
  );
}

export default ToDoListItem;
