import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INavigationButtonSlice {
  fixButton: boolean;
}

const initialState: INavigationButtonSlice = {
  fixButton: false,
};

export const navigationButtonSlice = createSlice({
  name: "inviteCard",
  initialState,
  reducers: {
    setFixButton: (state, action: PayloadAction<boolean>) => {
      state.fixButton = action.payload;
    },
  },
});

export const { setFixButton } = navigationButtonSlice.actions;

export default navigationButtonSlice.reducer;
