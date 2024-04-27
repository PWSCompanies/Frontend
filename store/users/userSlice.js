import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  auth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, data) => {
      state.user = data;
    },
    setToken: (state, data) => {
      state.token = data;
    },

    setAuth: (state, data) => {
      state.auth = data;
    },
  },
});

export const { createUser, setToken, setAuth } = userSlice.actions;
export const userReducer = userSlice.reducer;
