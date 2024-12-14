import { useAppSelector } from "@/app/store";
import { Button, Radio } from "antd";
import axios from "axios";
import { useState } from "react";
import { useWebSocket } from "../../_webSockect/webSocket";
import { useParams, useSearchParams } from "next/navigation";

export default function RandomDraw() {
  const [value, setValue] = useState(1);
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { gatheringId } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onclick = async () => {
    const response = await axios.post(
      `/api/postGames/${gatheringId}`,
      JSON.stringify({ type: "random_pick", token: token }),
      {
        headers: {
          "Content-Type": "application/json", // 헤더 설정
        },
      }
    );
    const data = await response.data;
    console.log(response);
  };

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
