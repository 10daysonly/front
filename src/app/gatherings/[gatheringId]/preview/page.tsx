"use client";
import { setInviteCard } from "@/app/slice";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { decodeToken } from "@/app/utils/token";

import React, { useEffect, useState } from "react";
import { getGatheringsPreview } from "./thunk";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import "./PreviewCard.scss";
import "./preview.module.css"; // custom css

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import Typography from "@/components/Typography";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Box from "@/components/Box";
import Dim from "@/components/Dim";

export default function Home() {
  const { gatheringId } = useParams();
  const dispatch = useAppDispatch();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const router = useRouter();
  const [data, setData] = useState<any>();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const fetchAction = await dispatch(getGatheringsPreview(gatheringId));
    if (getGatheringsPreview.rejected.match(fetchAction)) {
      console.log("오류");
    }
    const date = new Date(fetchAction.payload.meetAt);
    const options: any = { hour: "2-digit", hour12: true, timeZone: "Asia/Seoul" };
    const timeString = date.toLocaleString("ko-KR", options);
    const [amPm, hour] = timeString.split(" ");
    setData({
      ...fetchAction.payload,
      day: date.getUTCDate(),
      month: date.toLocaleString("ko-KR", { month: "long", timeZone: "Asia/Seoul" }),
      dayOfWeek: date.toLocaleString("ko-KR", { weekday: "long", timeZone: "Asia/Seoul" }),
      amPm: amPm,
      hour: hour,
    });
  };

  const handleRedirect = () => {
    router.push(`/invite/auth/sending?d=preview&gatheringId=${gatheringId}`);
  };

  return (
    <Layout page="preview-card">
      <Main>
        <Typography level={1}>{inviteCard.name}</Typography>
        <div className={`preview-card-image`}>
          <Image src={inviteCard.image} width={311} height={311} />
        </div>
        <div>{data?.day}</div>
        <div>{data?.month}</div>
        <div>{data?.dayOfWeek}</div>
        <div>{data?.amPm}</div>
        <div>{data?.hour}</div>
        <div className={`preview-card-info`}>
          <div className="preview-card-datetime">
            {/* <div className="preview-card-date">{inviteCard.meetAt}</div> */}
            {/* <div className="preview-card-time">{inviteCard.meetAt}</div> */}
          </div>
          {/* 시간이 나오는 경우 dim 처리 정상 */}
          <DataInfo icon={<Icon icon="locationLarge" />} title="Location">
            성수동 한옥집 와인 카페
          </DataInfo>
          <DataInfo icon={<Icon icon="sparkLarge" />} title="Dress code">
            빨간새, 화려한 색의 원피스
          </DataInfo>
          {/* <DataInfo title="Additional info">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </DataInfo>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam, nesciunt
            voluptates ad officiis quidem, excepturi culpa omnis officia sapiente facere ut iusto
            sed velit? Obcaecati ut adipisci sed accusamus?
          </Box> */}
          <Dim open={true} position="bottom">
            <p className="info-text">이벤트 내용과 참석자가 궁금하다면,</p>
            <Button color="primary" onClick={handleRedirect}>
              초대장 열어보기
            </Button>
          </Dim>
        </div>
      </Main>
    </Layout>
  );
}
