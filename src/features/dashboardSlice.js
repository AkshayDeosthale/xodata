import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { material: "iron", runID: 0 };

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { value: initialStateValue },
  reducers: {
    setOptions: (state, action) => {
      state.value = action.payload;
    },
    logoutOptions: (state, action) => {
      state.value = initialStateValue;
    },
  },
});
export const { setOptions, logoutOptions } = dashboardSlice.actions;

export default dashboardSlice.reducer;
