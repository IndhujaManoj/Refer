import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/login';
import { Provider } from 'react-redux';
const store=configureStore({
  reducer:{
    login:loginReducer,
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />

  </Provider>
);

reportWebVitals();
