import React from "react";

const Todo = ({
  task,
  date,
  isCompleted,
  id,
  onDelete,
  onStatusUpdate,
  onUpdate,
}) => {
  const handleUpdate = () => {
    onUpdate({ task, date, isCompleted, id });
  };

  return (
    <div>
      <h2>{task}</h2>
      <h4>due:{date}</h4>
      <button onClick={() => onStatusUpdate(id)}>
        {isCompleted ? "mark as  pending" : "mark as complete"}
      </button>
      <button onClick={handleUpdate}>update</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default Todo;