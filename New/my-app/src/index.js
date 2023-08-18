import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
// import {loginReducer} from './Slice/loginSlice';
import { Provider } from 'react-redux';
import loginSlice from './Slice/loginSlice';
import TableSlice from './Slice/TableSlice';
const store=configureStore({
  reducer:{
  login:loginSlice,
  table:TableSlice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();
