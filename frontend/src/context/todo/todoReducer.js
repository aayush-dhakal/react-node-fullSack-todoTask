import { GET_TODO, ADD_TODO, UPDATE_TODO, TODO_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
        loading: false,
      };

    case ADD_TODO:
      return {
        ...state,
        todo: [action.payload, ...state.todo],
        loading: false,
      };

    case UPDATE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          todo._id === action.payload._id ? action.payload : item
        ),
        loading: false,
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
