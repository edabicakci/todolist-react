import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import { useContext } from "react";
import { service } from "../network/service";
import RefreshContext from "../contexts/RefreshContext";

function ToDoListItem({ todo }) {
  const { refresh, setRefresh } = useContext(RefreshContext);
  const deleteTodo = async () => {
    await service.delete(`/${todo.id}`);
    setRefresh(!refresh);
  };
  return (
    <div>
      <ListItem  disablePadding>
        <ListItemIcon />
        <ListItemText className="List" primary={todo.todo} />

        <Button style = {{backgroundColor:"#BA68C8", marginRight: "300px", marginBottom: "10px"}} variant="contained" onClick={deleteTodo}>
          Delete
        </Button>
      </ListItem>
    </div>
  );
}

export default ToDoListItem;
