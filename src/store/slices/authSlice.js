import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: sessionStorage.getItem("user") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("user", action.payload);
    },
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
