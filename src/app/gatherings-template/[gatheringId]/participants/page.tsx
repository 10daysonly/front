"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import Attendee from "./_roomInfo/attendee/attendee";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";
import { useParams } from "next/navigation";

export default function Home() {
  const { gatheringId } = useParams();

  // 클라이언트 사이드에서만 실행되도록 상태 관리
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (gatheringId) {
      const decoded: any = decodeToken(gatheringId as string);
      setDecodedToken(decoded);
    }
  }, [gatheringId]); // gatheringId가 변경될 때만 실행

  if (!gatheringId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>로고</div>
      <Image alt="card image" src={""} width={300} height={200} />
      <CardInfo />
      <Attendee />
      <RandomDraw />
      <GuestbookForm />
      <NavigationButton />
    </div>
  );
}

function decodeToken(token: string) {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
}
