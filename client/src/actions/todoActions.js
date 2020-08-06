import axios from 'axios';
import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_DONE, TODOS_LOADING } from './todoTypes';

//this is for mongodb using axios, actual backend connection
export const getTodos = () => dispatch => {
  dispatch(setTodosLoading());
  axios
    .get('/api/todos')
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(`Error in file todoActions.js getTodos() ==> ${err}`);
    });
}

export const addTodo = name => dispatch => {
  dispatch(setTodosLoading());
  axios.post('/api/todos', { name })
    .then(res => {
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(`Error in file todoActions.js addTodo() ==> ${err}`);
    });
  return {
    type: ADD_TODO,
    payload: name
  }
}

export const deleteTodo = id => dispatch => {
  dispatch(setTodosLoading());
  axios
    .delete(`/api/todos/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    })
    .catch(err => {
      console.log(`Error in file todoActions.js deleteTodo() ==> ${err}`);
    });
}

export const editTodo = (id, name) => dispatch => {
  dispatch(setTodosLoading());
  console.log('edit todos');
  axios
    .post(`/api/todos/update/${id}`, { id, name })
    .then(res => {
      const todo = res.data;
      dispatch({
        type: EDIT_TODO,
        payload: {
          id: todo._id,
          name: todo.name
        }
      });
    }).catch(err => {
      console.log(`Error in file todoActions.js editTodo() ==> ${err}`);
    });
}

export const markDone = (id, done) => dispatch => {
  dispatch(setTodosLoading());
  axios
    .post(`/api/todos/update/${id}`, { done })
    .then(res => {
      const todo = res.data;
      dispatch({
        type: MARK_DONE,
        payload: {
          id: todo._id,
          done: todo.done
        }
      });
    }).catch(err => {
      console.log(`Error in file todoActions.js markDone() ==> ${err}`);
    });
}

//this will be used to display spinners
export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  }
}

//this is for redux state
/*
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

export const setTodosLoading = () => {
  return {
    type: TODOS_LOADING
  }
}
*/