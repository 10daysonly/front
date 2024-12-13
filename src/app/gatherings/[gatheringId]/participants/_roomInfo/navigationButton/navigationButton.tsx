"use client";

import { useAppDispatch } from "@/app/store";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { setFixButton } from "./navigationButtonSlice";
import { resetInviteCard } from "@/app/slice";

import GNB from "@/components/GNB";

export default function NavigationButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const fixCard = () => {
    dispatch(setFixButton(true));
    router.push("/invite/upsert");
  };

  const newCard = () => {
    dispatch(setFixButton(false));
    dispatch(resetInviteCard());
    router.push("/invite/upsert");
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
      onClick: () => {},
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
      onClick: () => {},
      icon: "delete",
    },
  ];

  return <GNB menus={menus} active="edit" />;
}
