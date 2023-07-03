import { createSlice } from "@reduxjs/toolkit";


const tagSearchSlice = createSlice({
  name: "tagSearch",
  initialState: {
    data: null,
  },
  reducers: {
    tagSearch: (state, action) => {
      state.data = action.payload;
      },
  },
});

export const { tagSearch } = tagSearchSlice.actions;
export default tagSearchSlice.reducer;
