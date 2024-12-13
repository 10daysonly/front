"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import Attendee from "./_roomInfo/attendee/attendee";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const { gatheringId } = useParams();

  // 클라이언트 사이드에서만 실행되도록 상태 관리
  const [decodedToken, setDecodedToken] = useState(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴

  useEffect(() => {
    if (token) {
      const decoded: any = decodeToken(token as string);
      setDecodedToken(decoded);
    }
  }, [token]); // gatheringId가 변경될 때만 실행

  if (!decodedToken) {
    // 에러 페이지로 이동
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

export function decodeToken(token: string) {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
}
