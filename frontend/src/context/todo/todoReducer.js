import { GET_TODO, ADD_TODO, UPDATE_TODO, TODO_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.todoId === action.payload.todoId ? action.payload : item
        ),
      };

    case TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
