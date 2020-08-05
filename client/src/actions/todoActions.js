import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_DONE } from './todoActionTypes';

export const getTodos = () => {
  return {
    type: GET_TODOS
  }
}

export const addTodo = name => {
  return {
    type: ADD_TODO,
    payload: name
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const editTodo = (id, name) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      name
    }
  }
}

export const markDone = id => {
  return {
    type: MARK_DONE,
    payload: id
  }
}