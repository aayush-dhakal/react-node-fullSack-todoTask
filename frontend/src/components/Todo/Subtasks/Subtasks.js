import React from "react";

const Subtasks = ({ subtask }) => {
  return (
    <>
      <span className="d-block p-2 border-bottom" key={subtask.subtaskId}>
        {subtask.title}
      </span>
    </>
  );
};

export default Subtasks;
