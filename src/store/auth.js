import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "234242343",
  },
  reducers: {},
});

export default authSlice.reducer;
