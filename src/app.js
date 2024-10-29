// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import App from './components/App';

import { Provider } from "react-redux";
import reducers from './modules/github/github.reducer';

const store = createStore(reducers, applyMiddleware(thunk));

 ReactDOM.render(
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, document.querySelector('#root')
);







// const root = createRoot(document.querySelector('#root'));
// root.render(<App />);
