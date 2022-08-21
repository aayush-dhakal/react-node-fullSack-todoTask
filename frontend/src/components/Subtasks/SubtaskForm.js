import React, { useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import TodoContext from "../../context/todo/todoContext";

const SubtaskForm = ({ todoId }) => {
  const [title, setTitle] = useState("");

  const todoContext = useContext(TodoContext);

  const { getTodos } = todoContext;

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/subtask", { todoId, title });
    setTitle("");
    getTodos();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex justify-content-around">
          <div style={{ flex: 1 }}>
            <input
              type="text"
              className="form-control"
              placeholder="What are the steps?"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-secondary mb-2">
              New Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubtaskForm;
