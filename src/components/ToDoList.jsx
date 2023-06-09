import React, { useState, useEffect, useContext } from "react";
import { service } from "../network/service";

import ToDoListItem from "./ToDoListItem";
import RefreshContext from "../contexts/RefreshContext";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const { refresh, setRefresh } = useContext(RefreshContext);

  const getData = async () => {
    let obj = await service.get();
    let list = obj.todos;
    list.sort((a, b) => a.submittedAt - b.submittedAt);
    setTodos(list);
  };

  useEffect(
    () => {
      getData();
    },
    [refresh]
  );
  return (
    <div>
      {todos &&
        todos.map((todo, key) => <ToDoListItem key={key} todo={todo} />)}
    </div>
  );
}

export default ToDoList;
