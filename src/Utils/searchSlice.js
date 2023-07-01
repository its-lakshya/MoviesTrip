import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: null,
  },
  reducers: {
    search: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;