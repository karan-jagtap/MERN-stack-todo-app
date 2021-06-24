//these are the actions related to Todos
import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_DONE, TODOS_LOADING } from '../actions/todoTypes';

//this initialState object will now act as global state for Todo related actions
const initialState = {
  todos: [],
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      //this returns all todos
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    case ADD_TODO:
      return {
        todos: [
          action.payload,
          ...state.todos
        ],
        loading: false
      }
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo._id !== action.payload)],
        loading: false
      }
    case EDIT_TODO:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo._id === action.payload.id) {
              todo.name = action.payload.name;
            }
            return todo;
          })],
        loading: false
      }
    case MARK_DONE:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo._id === action.payload.id) {
              todo.done = action.payload.done;
            }
            return todo;
          })
        ],
        loading: false
      }
    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}