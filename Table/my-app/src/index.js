import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/loginSlice'
import { Provider } from 'react-redux';
import tableReducer from './Slice/TableSlics'
const store=configureStore({
  reducer:{
    login:loginReducer,
    table:tableReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App/>
   </Provider>
);


reportWebVitals();
