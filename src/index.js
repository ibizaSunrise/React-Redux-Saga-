import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux'
import { forbiddenWordMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';


const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordMiddleware,
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

