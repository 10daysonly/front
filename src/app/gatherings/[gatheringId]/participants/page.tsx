"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";

import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import Attendee from "./_roomInfo/attendee/attendee";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";
import { useParams, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard } from "@/app/slice";
import axios from "axios";
import { getGatherings } from "./thunks";
import { decodeToken } from "@/app/utils/token";

export default function Home() {
  const { gatheringId } = useParams();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴

  useEffect(() => {
    getToken();
  }, []);

  // 토큰값 = 이메일  정보에 담기
  useEffect(() => {}, [token]);

  const getToken = async () => {
    // decoded : {sub: string;name: string;}
    let decoded: any = decodeToken(token as string);

    //로그인
    const userInfo: { sub: string; name: string } = {
      sub: decoded.sub as string,
      name: decoded.name as string,
    };
    localStorage.setItem("user", JSON.stringify(userInfo));

    // 방id로 정보 조회 후 데이터 저장
    const fetchAction = await dispatch(getGatherings(gatheringId));
    if (getGatherings.rejected.match(fetchAction)) {
      console.log("오류");
    }
  };

  // if (!inviteCard.hostEmail) {
  //   // 에러 페이지로 이동
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <CardInfo />
      <Attendee />
      <RandomDraw />
      <GuestbookForm />
      <NavigationButton />
    </div>
  );
}
