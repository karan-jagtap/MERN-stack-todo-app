import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//binds store and react together
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* Everything inside of <Provider> can now use redux store
        Provider is initialized on the root component in which reducers are defined
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
