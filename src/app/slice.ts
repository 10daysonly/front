import dayjs, { Dayjs } from "dayjs";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInviteCard } from "./types";
import { getGatherings } from "./gatherings/[gatheringId]/participants/thunks";

export interface IInviteCardSlice {
  inviteCard: IInviteCard;
}

const initialState: IInviteCardSlice = {
  inviteCard: {
    gatheringId: "",
    host: {
      name: "",
      email: "",
      paritipantId: "",
      imageUrl: "",
    },
    hostEmail: "",
    hostName: "",
    name: "",
    image: "",
    location: "",
    dressCode: "",
    additionalInfo: "",
    intro: "",
    meetAt: dayjs(),
  },
};

export const inviteCardSlice = createSlice({
  name: "inviteCard",
  initialState,
  reducers: {
    resetInviteCard: (state) => {
      // inviteCard를 초기 상태로 재설정
      state.inviteCard = initialState.inviteCard;
    },
    setInviteCard: (state, action: PayloadAction<IInviteCard>) => {
      if (action.payload.meetAt instanceof dayjs) {
        // Dayjs 객체일 경우 toISOString() 호출 후 값을 다시 할당
        action.payload.meetAt = action.payload.meetAt.format("YYYY-MM-DDTHH:mm:ssZ");
      }
      // 'meetAt' 값이 이미 ISO 형식의 문자열이면 그대로 두기
      state.inviteCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGatherings.pending, (state) => {})
      .addCase(getGatherings.fulfilled, (state, action) => {
        console.log(action.payload);
        state.inviteCard = {
          ...state.inviteCard,
          gatheringId: action.payload.gatheringId,
          // hostEmail: action.payload.host,
          // hostName: action.payload.host,
          image: action.payload.imageUrl,
          meetAt: action.payload.meetAt,
          host: {
            name: action.payload.name,
            email: action.payload.host,
            imageUrl: action.payload.imageUrl,
            joinedAt: action.payload.joinedAt,
          },
          name: action.payload.name,
          location: action.payload.location,
          dressCode: action.payload.dressCode,
          additionalInfo: action.payload.additionalInfo,
          intro: action.payload.intro,
        };
      })
      .addCase(getGatherings.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { resetInviteCard, setInviteCard } = inviteCardSlice.actions;

export default inviteCardSlice.reducer;
