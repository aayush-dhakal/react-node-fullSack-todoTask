import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import Loader from "../Spinner";
import Accordion from "react-bootstrap/Accordion";
import Subtasks from "./Subtasks/Subtasks";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { getTodos, todo, updateTodo } = todoContext;

  const [loading, setLoading] = useState(false);
  const [todoStatus, setTodoStatus] = useState(null);

  // const getTodos = async () => {
  //   const todo = await axios.get("/api/todo");
  //   console.log(todo);
  // };

  useEffect(() => {
    setLoading(true);
    getTodos();
    setLoading(false);
    // eslint-disable-next-line
  }, [todoStatus]);

  console.log(todo);

  const onClick = (todoId, status) => {
    setTodoStatus(!status);
    updateTodo(todoId, !status);
  };

  return (
    <div>
      {loading && <Loader />}
      {todo != null &&
        todo.map((t) => (
          <div key={t.todoId}>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <input
                    className="form-check-input m-1"
                    type="checkbox"
                    id="flexCheckChecked"
                    value={todoStatus}
                    checked={t.status}
                    onClick={() => onClick(t.todoId, t.status)}
                  />
                  {t.title}
                </Accordion.Header>
                <Accordion.Body className="m-0 p-0">
                  {t.Subtasks?.length > 0 &&
                    t.Subtasks.map((s) => <Subtasks subtask={s} />)}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
    </div>
  );
};

export default Todos;
