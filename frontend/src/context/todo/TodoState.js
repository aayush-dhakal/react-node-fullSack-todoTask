import React, { useReducer } from "react";
import axios from "axios";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { GET_TODO, ADD_TODO, UPDATE_TODO, TODO_ERROR } from "../types";

const TodoState = (props) => {
  const initialState = {
    todo: null,
    error: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Get todos
  const getTodos = async () => {
    try {
      const res = await axios.get("/api/todo");

      dispatch({ type: GET_TODO, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add todo
  const addTodo = async (todo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/todo", contact, config);

      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update todo
  const updateTodo = async (status) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/todo/${todoId}`, config, {
        status,
      });

      dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todo: state.todo,
        error: state.error,
        getTodos,
        addTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
