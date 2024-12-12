import dayjs, { Dayjs } from "dayjs";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInviteCard } from "./types";

export interface IInviteCardSlice {
  inviteCard: IInviteCard;
}

const initialState: IInviteCardSlice = {
  inviteCard: {
    hostEmail: "",
    hostName: "",
    name: "",
    image: "",
    location: "",
    dressCode: "",
    additionalInfo: "",
    intro: "",
    meetAt: "",
  },
};

export const inviteCardSlice = createSlice({
  name: "inviteCard",
  initialState,
  reducers: {
    setInviteCard: (state, action: PayloadAction<IInviteCard>) => {
      if (action.payload.meetAt instanceof dayjs) {
        // Dayjs 객체일 경우 toISOString() 호출 후 값을 다시 할당
        action.payload.meetAt = action.payload.meetAt.toISOString();
      }
      // 'meetAt' 값이 이미 ISO 형식의 문자열이면 그대로 두기
      state.inviteCard = action.payload;
    },
  },
});

export const { setInviteCard } = inviteCardSlice.actions;

export default inviteCardSlice.reducer;
