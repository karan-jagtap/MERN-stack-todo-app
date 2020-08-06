import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// calling index.js so no file name specified below
import rootReducer from './reducers/';

const inititalState = {}

// creating array of middlewares
const middleware = [thunk]

const store = createStore(rootReducer, inititalState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
))

export default store;