// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import App from "./components/App";

import { Provider } from "react-redux";
import { reducer as githubReducer } from "./modules/github/github.reducer";
import { reducer as stackoverflowReducer } from "./modules/stackoverflow/stackoverflow.reducer";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
 ReactDOM.render(
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, document.querySelector('#root')
);


