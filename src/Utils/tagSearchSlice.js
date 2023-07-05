import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData = localStorage.getItem('localStorageData') !== null ? 
JSON.parse(localStorage.getItem('localStorageData')) : null

const tagSearchSlice = createSlice({
  name: "tagSearch",
  initialState: {
    data: getLocalStorageData,
  },
  reducers: {
    tagSearch: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('localStorageData', JSON.stringify(state.data))
      },
  },
});

export const { tagSearch } = tagSearchSlice.actions;
export default tagSearchSlice.reducer;
