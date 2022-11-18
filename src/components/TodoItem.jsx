import React from "react";

const TodoItem = ({ item, onDelete }) => {
  return (
    <div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
      <button className="btn btn-danger" onClick={() => onDelete(item)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
