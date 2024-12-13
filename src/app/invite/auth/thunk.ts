import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store"; // Store의 타입을 적절히 가져와야 합니다.
import axios from "axios";

export const postGatherings = createAsyncThunk("data/fetchData", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState; // Store의 상태 가져오기
  const allOfInfo = state.inviteCardSlice.inviteCard; // 설정 값 가져오기

  // API 호출
  const response = await axios.post("/api/postGatherings", allOfInfo, {
    headers: {
      "Content-Type": "application/json", // 헤더 설정
    },
  });
  const data = await response.data;
  console.log(response.data);
  return data; // 데이터 반환
});

function decodeFromBase64(encodedStr: string) {
  return Buffer.from(encodedStr, "base64").toString("utf-8");
}
