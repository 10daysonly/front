// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "@/app/store"; // Store의 타입을 적절히 가져와야 합니다.
// import axios from "axios";

// export const putGatherings = createAsyncThunk("data/fetchData", async (_, thunkAPI) => {
//   const state = thunkAPI.getState() as RootState; // Store의 상태 가져오기
//   const inviteCard = state.inviteCardSlice.inviteCard;
//   const storedData = localStorage.getItem("user");
//   // API 호출
//   console.log(inviteCard);
//   const response = await axios.post(
//     `/api/putGatherings/${inviteCard.gatheringId}`,
//     {
//       hostEmail: JSON.parse(storedData).name,
//       hostName: JSON.parse(storedData).name,
//       name: inviteCard.name,
//       image: inviteCard.image,
//       location: inviteCard.location,
//       dressCode: inviteCard.dressCode,
//       additionalInfo: inviteCard.additionalInfo,
//       intro: inviteCard.intro,
//       meetAt: inviteCard.meetAt,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json", // 헤더 설정
//       },
//     }
//   );
//   const data = await response.data;
//   console.log(response.data);
//   return data; // 데이터 반환
// });

// function decodeFromBase64(encodedStr: string) {
//   return Buffer.from(encodedStr, "base64").toString("utf-8");
// }
