import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData =
  localStorage.getItem("localStorageData") !== null
    ? JSON.parse(localStorage.getItem("localStorageData"))
    : null;

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: getLocalStorageData,
  },
  reducers: {
    search: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("localStorageData", JSON.stringify(state.data));
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
