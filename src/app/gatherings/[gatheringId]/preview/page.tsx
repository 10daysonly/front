"use client";
import { setInviteCard } from "@/app/slice";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { decodeToken } from "@/app/utils/token";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";

import React, { useEffect, useState } from "react";
import { getGatheringsPreview } from "./thunk";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const { gatheringId } = useParams();
  const dispatch = useAppDispatch();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const router = useRouter();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const fetchAction = await dispatch(getGatheringsPreview(gatheringId));

    if (getGatheringsPreview.rejected.match(fetchAction)) {
      console.log("오류");
    }
  };

  const handleRedirect = () => {
    router.push(`/invite/auth/sending?d=preview`);
  };
  return (
    <div>
      <div>로고</div>
      <Image alt="card image" src={inviteCard.image} width={300} height={200} />
      <div>{inviteCard.name}</div>
      {/* <div>{inviteCard.meetAt}</div> */}
      {/* <div>{inviteCard.hostEmail}</div> */}
      <div>{inviteCard.name}</div>
      <Button onClick={handleRedirect}>초대장 열어보기</Button>
    </div>
  );
}
