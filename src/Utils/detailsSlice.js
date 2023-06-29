import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    detailsData: null,
  },
  reducers: {
    searchDetails: (state, action) => {
      state.detailsData = action.payload;
    },
  },
});

export default detailsSlice.reducer;
export const { searchDetails } = detailsSlice.actions;
