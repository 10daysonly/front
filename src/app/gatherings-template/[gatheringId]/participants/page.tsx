"use client";

import { Button, Card, ConfigProvider, DatePicker, Form, Input } from "antd";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import Attendee from "./_roomInfo/attendee/attendee";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";
import { useParams } from "next/navigation";

import "./InviteRoom.scss";
import "./invite-room.module.css"; // custom css

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import Image from "@/components/Image";
import ContentBox from "@/components/ContentBox";

import dummyImage from "@/components/Image/imgs/dummyImage.png";

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
    <Layout page="invite-room">
      <Main>
        <ContentBox>
          <div className={`invite-room-image`}>
            <Image src={dummyImage.src} width={dummyImage.width} height={dummyImage.height} />
          </div>
          <CardInfo />
          <Attendee />
        </ContentBox>
        <RandomDraw />
        <GuestbookForm />
        <NavigationButton />
      </Main>
    </Layout>
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
