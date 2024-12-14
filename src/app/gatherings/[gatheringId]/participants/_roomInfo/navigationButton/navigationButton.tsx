"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { Button, message } from "antd";
import { useParams, useRouter } from "next/navigation";
import { setFixButton } from "./navigationButtonSlice";
import { resetInviteCard } from "@/app/slice";
import axios from "axios";

import GNB from "@/components/GNB";

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

  const menus: {
    text: React.ReactNode;
    icon: "edit" | "share" | "invite" | "delete";
    onClick: Function;
  }[] = [
    {
      text: "수정하기",
      onClick: () => {
        fixCard();
      },
      icon: "edit",
    },
    {
      text: "URL 공유하기",
      onClick: () => {
        URLCopy();
      },
      icon: "share",
    },
    {
      text: "초대하기",
      onClick: () => {
        newCard();
      },
      icon: "invite",
    },
    {
      text: "삭제하기",
      onClick: () => {
        deleteCard();
      },
      icon: "delete",
    },
  ];

  return <GNB menus={menus} active="edit" />;
}
