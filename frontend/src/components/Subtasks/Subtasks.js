import React, { useContext } from "react";
import axios from "axios";
import TodoContext from "../../context/todo/todoContext";

const Subtasks = ({ subtask }) => {
  const todoContext = useContext(TodoContext);

  const { getTodos } = todoContext;

  const onClick = async (subtaskId, status) => {
    await axios.put(`/api/subtask/${subtaskId}`, {
      status: !status,
    });
    getTodos();
  };

  return (
    <>
      <span className="d-block p-2 border-bottom" key={subtask.subtaskId}>
        <span style={{ margin: "0 10px 0 10px" }}>
          <input
            className="form-check-input m-1"
            type="checkbox"
            id="flexCheckChecked"
            checked={subtask.status}
            onClick={() => onClick(subtask.subtaskId, subtask.status)}
          />
        </span>
        {subtask.title}
      </span>
    </>
  );
};

export default Subtasks;
