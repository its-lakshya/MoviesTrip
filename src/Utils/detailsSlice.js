import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData = localStorage.getItem('localStorageData') !== null ? 
JSON.parse(localStorage.getItem('localStorageData')) : null

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    detailsData: getLocalStorageData,
  },
  reducers: {
    searchDetails: (state, action) => {
      state.detailsData = action.payload;
      localStorage.setItem('localStorageData', JSON.stringify(state.detailsData))
    },
  },
});

export default detailsSlice.reducer;
export const { searchDetails } = detailsSlice.actions;
