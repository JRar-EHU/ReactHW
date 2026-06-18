import { createSlice } from "@reduxjs/toolkit";
import { LOCALS } from "../../constants";

const initialState = {
  locale: LOCALS.EN,
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
