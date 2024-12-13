"use client";

import { useAppDispatch } from "@/app/store";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { setFixButton } from "./navigationButtonSlice";
import { resetInviteCard } from "@/app/slice";

export default function NavigationButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const fixCard = () => {
    dispatch(setFixButton(true));
    router.push("/invite/upsert");
  };

  const newCard = () => {
    dispatch(resetInviteCard());
    router.push("/invite/upsert");
  };
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <Button type="primary" onClick={fixCard}>
        수정하기
      </Button>
      <Button type="primary">초대하기</Button>
      <Button type="primary" onClick={newCard}>
        새로 만들기
      </Button>
      <Button type="primary">삭제하기</Button>
    </div>
  );
}
