//these are the actions related to Todos
import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_DONE } from '../actions/todoActionTypes';
import { v1 as uuid } from 'uuid';

//this initialState object will now act as global state for Todo related actions
const initialState = {
  todos: [
    { id: uuid(), name: "One", done: false },
    { id: uuid(), name: "Two", done: true },
    { id: uuid(), name: "Three", done: false },
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      //this returns all todos
      return {
        ...state
      }
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: uuid(),
            name: action.payload,
            done: false
          }
        ]
      }
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      }
    case EDIT_TODO:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              todo.name = action.payload.name;
            }
            return todo;
          })]
      }
    case MARK_DONE:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.payload) {
              todo.done = !todo.done;
            }
            return todo;
          })
        ]
      }

    default:
      return state
  }
}