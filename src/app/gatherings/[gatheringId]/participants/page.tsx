"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input, message } from "antd";

import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import Attendee from "./_roomInfo/attendee/attendee";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";
import { useParams, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard, setIsHost } from "@/app/slice";
import axios from "axios";
import { getGatherings, postParticipants } from "./thunks";
import { decodeToken } from "@/app/utils/token";

import "./InviteRoom.scss";
import "./CustomInviteRoom.scss";
import "./invite-room.module.css"; // custom css

import Layout from "@/components/Layout";
import Main from "@/components/Main";
import ContentBox from "@/components/ContentBox";
import { IParticipants } from "@/app/types";

export default function Home() {
  const { gatheringId } = useParams();
  const { inviteCard, isHost } = useAppSelector((state) => state.inviteCardSlice);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    // 토큰 디코드
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

    // 호스트인지 게스트인지 판단 후 게스트일 경우  /api/v1/gatherings/{gatheringId}/participants api호출하기
    const hostUser = fetchAction.payload.participants.find(
      (user: IParticipants) => user.isHost === true
    );
    const email = hostUser ? hostUser.email : null;

    if (userInfo.sub == email) {
      dispatch(setIsHost(true));
      console.log("나 호스트임");
    } else {
      dispatch(setIsHost(false));
      console.log("나 게스트임");
      // 게스트 업데이트 웹서비스 보내고 다시 방정보 조회할 것

      // console.log("오류나면 아마 이미 이전에 접속한 이력이있으며 카드그룹에 정보가 이미 있음");
      const fetchAction = await dispatch(postParticipants({ gatheringId, userInfo }));
      console.log(fetchAction);
    }
  };

  // if (!inviteCard.hostEmail) {
  //   // 에러 페이지로 이동
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout page="invite-room">
      <Main>
        <ContentBox>
          <CardInfo />
          <Attendee />
        </ContentBox>
        {/* <RandomDraw /> */}
        {/* <GuestbookForm /> */}
        {isHost && <NavigationButton />}
      </Main>
    </Layout>
  );
}
