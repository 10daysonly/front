import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/app/store"; // Store의 타입을 적절히 가져와야 합니다.
import axios from "axios";

export const getGatheringsPreview = createAsyncThunk(
  "data/fetchData",
  async (token: string | string[], thunkAPI) => {
    const state = thunkAPI.getState() as RootState; // Store의 상태 가져오기
    const settingValue = state.inviteCardSlice.inviteCard; // 설정 값 가져오기

    // API 호출
    const response = await axios.get("/api/getGatheringsPreview", {
      params: {
        //   gatheringId: decodeFromBase64(settingValue.hostEmail!),
        gatheringId: token,
      },
    });
    const data = await response.data;
    console.log(response.data);
    return data; // 데이터 반환
  }
);

function decodeFromBase64(encodedStr: string) {
  return Buffer.from(encodedStr, "base64").toString("utf-8");
}
