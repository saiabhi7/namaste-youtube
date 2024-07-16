import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchResults } = cacheSlice.actions;

export default cacheSlice.reducer;
