import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function ToDoListItem() {
  return (

    <>

<ListItem disablePadding>
            
              <ListItemIcon>
            
              </ListItemIcon>
              <ListItemText primary="Inbox" />
           
<Button variant="contained">Delete</Button>
          </ListItem>

    
    </>
   
    
  );
}

export default ToDoListItem;
