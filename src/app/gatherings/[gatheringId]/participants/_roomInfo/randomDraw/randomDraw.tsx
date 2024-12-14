import { useAppSelector } from "@/app/store";
import { Button, Radio } from "antd";
import axios from "axios";
import { useState } from "react";
import { useWebSocket } from "../../_webSockect/webSocket";

export default function RandomDraw() {
  const [value, setValue] = useState(1);
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onclick = async () => {
    const response = await axios.post(
      `/api/postGames/${inviteCard.gatheringId}`,
      JSON.stringify({ type: "random_pick" }),
      {
        headers: {
          "Content-Type": "application/json", // 헤더 설정
        },
      }
    );
    const data = await response.data;
    console.log(response);
  };

  const gatheringId = "MIKnlAITUD1Fh2NBgNa9t"; // 동적으로 받아올 값
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3RlazYwMzcwQHBva2VsaW5lLmNvbSIsIm5hbWUiOiLquLjrmKXsnbQifQ.biaBKAY-BxPtrXvWl0xos6FPKqwzd1L1d69GfNS6RPE"; // 동적으로 받아올 토큰

  const { isConnected, messages, error, sendMessage } = useWebSocket({ gatheringId, token });

  return (
    <div>
      <p>랜덤 뽑기</p>
      <div>
        <div>연결 상태: {isConnected ? "연결됨" : "연결 안됨"}</div>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>{JSON.stringify(msg)}</div>
          ))}
        </div>
      </div>
      <Radio.Group
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }} // 세로 정렬 및 간격 추가
      >
        <Radio.Button value="option1">마니또 뽑기(본인 제외 랜덤)</Radio.Button>
        <Radio.Button value="option2">랜덤 뽑기(완전 무작위)</Radio.Button>
      </Radio.Group>
      <Button onClick={onclick}>시작</Button>
    </div>
  );
}
