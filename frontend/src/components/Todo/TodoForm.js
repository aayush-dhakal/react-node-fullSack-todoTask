import React, { useState, useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { addTodo } = todoContext;

  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="d-flex justify-content-around">
          <div style={{ flex: 1 }}>
            <input
              type="text"
              className="form-control"
              placeholder="What to do?"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary mb-2">
              New List
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
