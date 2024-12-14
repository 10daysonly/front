"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { Button, message } from "antd";
import { useParams, useRouter } from "next/navigation";
import { setFixButton } from "./navigationButtonSlice";
import { resetInviteCard } from "@/app/slice";
import axios from "axios";

export default function NavigationButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { gatheringId } = useParams();

  const fixCard = () => {
    dispatch(setFixButton(true));
    router.push("/invite/upsert");
  };

  const URLCopy = async () => {
    const textToCopy = `http://localhost:3000/gatherings/${inviteCard.gatheringId}/preview`; // 복사할 텍스트 지정
    try {
      // 클립보드에 텍스트 복사
      await navigator.clipboard.writeText(textToCopy);
      message.success("텍스트가 복사되었습니다: " + textToCopy);
    } catch (err) {
      console.error("복사 실패:", err);
      message.error("복사에 실패했습니다.");
    }
  };

  const newCard = () => {
    dispatch(setFixButton(false));
    dispatch(resetInviteCard());
    router.push("/invite/upsert");
  };

  const deleteCard = async () => {
    const response = await axios.delete("/api/deleteGatherings", {
      params: {
        gatheringId: gatheringId,
      },
    });

    message.success("삭제완");
    console.log(response);
  };
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <Button type="primary" onClick={fixCard}>
        수정하기
      </Button>
      <Button type="primary" onClick={URLCopy}>
        초대하기
      </Button>
      <Button type="primary" onClick={newCard}>
        새로 만들기
      </Button>
      <Button type="primary" onClick={deleteCard}>
        삭제하기
      </Button>
    </div>
  );
}
