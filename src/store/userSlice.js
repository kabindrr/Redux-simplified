import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };
const slice = createSlice({
  name: "BiksUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = slice;

export const { setUser } = actions;
export default reducer;
