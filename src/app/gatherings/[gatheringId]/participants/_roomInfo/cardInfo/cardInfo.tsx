"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { Image } from "antd";

import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Box from "@/components/Box";

import dummyImage from "@/components/Image/imgs/dummyImage.png";
import { useState } from "react";

export default function CardInfo() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const [cardInfo, setCardInfo] = useState(inviteCard);

  const dateChanger = (meetAt: string) => {
    const date = new Date(meetAt);
    const options: any = { hour: "2-digit", hour12: true, timeZone: "Asia/Seoul" };
    const timeString = date.toLocaleString("ko-KR", options);
    const [amPm, hour] = timeString.split(" ");
    return {
      day: date.getUTCDate(),
      month: date.toLocaleString("ko-KR", { month: "long", timeZone: "Asia/Seoul" }),
      dayOfWeek: date.toLocaleString("ko-KR", { weekday: "long", timeZone: "Asia/Seoul" }),
      amPm: amPm,
      hour: hour,
    };
  };

  return (
    <div className={`invite-info`}>
      <div className={`invite-room-image`}>
        {/* <Image alt="card image" src={inviteCard.image} width={300} height={200} /> */}
        <Image alt="card image" src={inviteCard.image} width={300} height={200} />
      </div>
      <Typography level={1}>{inviteCard.name}</Typography>
      <DataInfo icon={<Icon icon="calendarLarge" />} title="Date">
        {dateChanger(inviteCard.meetAt).month} 월 {dateChanger(inviteCard.meetAt).day}일{" "}
        {dateChanger(inviteCard.meetAt).dayOfWeek}
      </DataInfo>
      <DataInfo icon={<Icon icon="timeLarge" />} title="Time">
        {dateChanger(inviteCard.meetAt).amPm} {dateChanger(inviteCard.meetAt).hour}
      </DataInfo>
      <DataInfo icon={<Icon icon="locationLarge" />} title="Location">
        {inviteCard.location}
      </DataInfo>
      <DataInfo icon={<Icon icon="sparkLarge" />} title="Dress code">
        {inviteCard.dressCode}
      </DataInfo>
      <DataInfo title="Additional info">{inviteCard.additionalInfo}</DataInfo>
      <Box>{inviteCard.intro}</Box>
    </div>
  );
}
