import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">ToDos List</h3>
      {props.todo.length === 0
        ? "No Todos to display"
        : props.todo.map((i) => {
            return <TodoItem item={i} onDelete={props.onDelete} key={i.sno} />;
          })}
    </div>
  );
};

export default Todos;
