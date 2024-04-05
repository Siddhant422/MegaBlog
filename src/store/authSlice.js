import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userDate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.status = true;
      state.userDate = action.payload.userDate;
    },

    LogOut: (state) => {
      state.status = false;
      state.userDate = null;
    },
  },
});

export const { Login, LogOut } = authSlice.actions;

export default authSlice.reducer;
