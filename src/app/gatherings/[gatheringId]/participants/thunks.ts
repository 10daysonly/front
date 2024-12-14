import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store"; // Store의 타입을 적절히 가져와야 합니다.
import axios from "axios";

export const getGatherings = createAsyncThunk(
  "data/fetchData",
  async (token: string | string[], thunkAPI) => {
    const state = thunkAPI.getState() as RootState; // Store의 상태 가져오기
    const settingValue = state.inviteCardSlice.inviteCard; // 설정 값 가져오기

    // API 호출
    const response = await axios.get("/api/getGatherings", {
      params: {
        gatheringId: token,
      },
    });
    const data = await response.data;
    console.log(response.data);
    return data; // 데이터 반환
  }
);

export const postParticipants = createAsyncThunk(
  "data/fetchData",
  async (
    { gatheringId, userInfo }: { gatheringId: string | string[]; userInfo: any },
    thunkAPI
  ) => {
    try {
      // API 호출 (body와 동적 URL에 데이터 전달)
      const response = await axios.post(`/api/postParticipants/${gatheringId}`, {
        settingValue: { name: userInfo.name, email: userInfo.sub }, // Body에 담을 객체 데이터
      });

      const data = response.data;
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error("Error in postParticipants:", error);
      return thunkAPI.rejectWithValue("API 호출에 실패했습니다.");
    }
  }
);
