import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthinticated: false,
  username: "fani@test.com",
  password: "12345",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state, actions) {
      if (
        state.username === actions.payload.email &&
        state.password === actions.payload.password
      ) {
        state.isAuthinticated = true;
        return;
      }
      state.isAuthinticated = false;
    },
    logout(state) {
      state.isAuthinticated = false;
    },
  },
});
