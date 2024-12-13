"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
// import { Image } from "antd";

import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Box from "@/components/Box";
import Image from "@/components/Image";

export default function CardInfo() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);

  return (
    <div className={`invite-info`}>
      <div className={`invite-room-image`}>
        <Image alt="card image" src={inviteCard.image} width={300} height={200} />
      </div>
      <Typography level={1}>{inviteCard.name}</Typography>
      <DataInfo icon={<Icon icon="calendarLarge" />} title="Date">
        12 월 22일 일요일
      </DataInfo>
      <DataInfo icon={<Icon icon="timeLarge" />} title="Time">
        오후 7시
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
