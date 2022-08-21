import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import Loader from "../Spinner";
import Accordion from "react-bootstrap/Accordion";
import Subtasks from "../Subtasks/Subtasks";
import SubtaskForm from "../Subtasks/SubtaskForm";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { getTodos, todo, updateTodo } = todoContext;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTodos();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  console.log(todo);

  const onClick = (todoId, status) => {
    updateTodo(todoId, !status);
    getTodos();
  };

  return (
    <div>
      {loading && <Loader />}
      {todo != null &&
        todo.map((t) => (
          <div key={t.todoId}>
            <Accordion style={{ position: "relative" }}>
              <Accordion.Item eventKey={t.todoId}>
                <Accordion.Header>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                    checked={t.status}
                    onClick={() => onClick(t.todoId, t.status)}
                    style={{ margin: "0 10px 0px 2px" }}
                  />
                  {t.title}
                  <span
                    className="text-muted"
                    style={{ marginLeft: "auto", fontSize: "15px" }}
                  >
                    {t.totoalSubtasks > 0 && (
                      <span>
                        {t.completedSubtasks} of {t.totoalSubtasks} completed
                      </span>
                    )}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="m-0 p-0 text-muted">
                  {t.Subtasks?.length > 0 &&
                    t.Subtasks.map((s) => <Subtasks subtask={s} />)}
                  <SubtaskForm todoId={t.todoId} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
    </div>
  );
};

export default Todos;
