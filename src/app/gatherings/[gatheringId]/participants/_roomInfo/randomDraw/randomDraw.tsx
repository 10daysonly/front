import { useAppSelector } from "@/app/store";
import { Button, Radio } from "antd";
import axios from "axios";
import { useState } from "react";
import { useWebSocket } from "../../_webSockect/webSocket";
import { useParams, useSearchParams } from "next/navigation";
import { decodeToken } from "@/app/utils/token";

export default function RandomDraw() {
  const [whichGame, setWhichGame] = useState("secret_santa");
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { gatheringId } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴
  let decoded: any = decodeToken(token as string);

  const onclick = async () => {
    const response = await axios.post(
      `/api/postGames/${gatheringId}`,
      JSON.stringify({ type: whichGame, token: token }),
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
        {/* <div>연결 상태: {isConnected ? "연결됨" : "연결 안됨"}</div> */}
        <div>
          <div>
            {messages ? (
              <div>
                {messages?.[messages.length - 1]?.data?.results?.find(
                  (item: any) => item.receiver === decoded.name
                )?.giver || "정보 없음"}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Radio.Group
        onChange={(e) => {
          setWhichGame(e.target.value);
        }}
        value={whichGame}
        optionType="button"
        buttonStyle="solid"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }} // 세로 정렬 및 간격 추가
      >
        <Radio.Button value="secret_santa">마니또 뽑기(본인 제외 랜덤)</Radio.Button>
        <Radio.Button value="random_pick">랜덤 뽑기(완전 무작위)</Radio.Button>
      </Radio.Group>
      <Button onClick={onclick}>시작</Button>
    </div>
  );
}
