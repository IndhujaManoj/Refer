

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  loading: false,
  error: null,
  token:null
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token=action.payload
    },
    loginFailure: (state, action) => {
      state.loading = false; 
      state.error = action.payload;
    },
  },
});

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await axios.post('https://reqres.in/api/login', { email, password });
    const user = response.data.token;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};

export const { loginFailure, loginSuccess, loginStart } = loginSlice.actions;
export default loginSlice.reducer;
