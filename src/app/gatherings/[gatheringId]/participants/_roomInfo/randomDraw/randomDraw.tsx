import { useAppSelector } from "@/app/store";
import { Radio } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useWebSocket } from "../../_webSockect/webSocket";
import { useParams, useSearchParams } from "next/navigation";
import { decodeToken } from "@/app/utils/token";

import ContentBox from "@/components/ContentBox";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Box from "@/components/Box";
import Text from "@/components/Text";

export default function RandomDraw() {
  const [whichGame, setWhichGame] = useState("secret_santa");
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { gatheringId } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴
  let decoded: any = decodeToken(token as string);
  const [message, setMessage] = useState<any>();

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
    setMessage(response);
  };

  const { isConnected, messages, error, sendMessage } = useWebSocket({ gatheringId, token });

  useEffect(() => {
    if (!messages) {
      setMessage(messages?.[messages.length - 1]);
    }

    const getGames = async () => {
      try {
        const response = await axios.get("/api/getGames", {
          params: {
            gatheringId: gatheringId,
            token: token,
          },
        });
        setMessage(response);
      } catch (error) {}
    };
    getGames();
  }, [messages]);

  console.log(isConnected);
  return (
    <div className="random-draw">
      <ContentBox>
        <Typography>랜덤 뽑기</Typography>

        <Box line={true}>
          {/* <div>연결 상태: {isConnected ? "연결됨" : "연결 안됨"}</div> */}
          <Button
            block={true}
            color={whichGame === `secret_santa` ? "active" : "info-reverse"}
            onClick={() => {
              setWhichGame("secret_santa");
            }}
          >
            <Text strong={true} size="large">
              마니또 뽑기
            </Text>
            (본인 제외 랜덤)
          </Button>
          <Button
            block={true}
            color={whichGame === `random_pick` ? "active" : "info-reverse"}
            onClick={() => {
              setWhichGame("random_pick");
            }}
          >
            <Text strong={true} size="large">
              랜덤 뽑기
            </Text>
            (완전 무작위)
          </Button>

          <div className="random-draw-result">
            <Box>
              {whichGame == "secret_santa" ? (
                <>
                  {message ? (
                    <div>
                      {message.data?.results?.find((item: any) => item.receiver === decoded.name)
                        ?.giver || "정보 없음"}
                    </div>
                  ) : (
                    "아직 뽑기 시작을 안했습니다"
                  )}
                </>
              ) : (
                <>
                  <div>{message.data.results[0].picked}</div>
                </>
              )}
            </Box>
          </div>

          <Button pill={true} color={`primary`} onClick={onclick}>
            시작
          </Button>
        </Box>
      </ContentBox>
    </div>
  );
}
