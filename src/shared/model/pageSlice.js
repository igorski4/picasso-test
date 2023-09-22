import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state) {
      state.page++;
    },
  },
});

export const { setPage } = pageSlice.actions;
export const page = (state) => state.page;
export default pageSlice.reducer;
