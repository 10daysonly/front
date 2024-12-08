import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInviteCard } from "./types";

export interface IInviteCardSlice {
  inviteCard: IInviteCard;
}

const initialState: IInviteCardSlice = {
  inviteCard: { image: "", name: "", date: "", place: "", dressCode: "", desc: "", message: "" },
};

export const inviteCardSlice = createSlice({
  name: "inviteCard",
  initialState,
  reducers: {
    setInviteCard: (state, action: PayloadAction<IInviteCard>) => {
      state.inviteCard = action.payload;
    },
  },
});

export const { setInviteCard } = inviteCardSlice.actions;

export default inviteCardSlice.reducer;
