"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { Image } from "antd";

export default function CardInfo() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <Image alt="card image" src={inviteCard.image} width={300} height={200} />
          <br />
          <small>Date</small>
          <br />
          <p>12월22일 일요일ㅤㅤ</p>
        </div>
        <div>
          <small>Time</small>
          <br />
          <p>오후 7시</p>
        </div>
      </div>
      <div>
        <small>Location</small>
        <p>{inviteCard.location}</p>
      </div>
      <div>
        <small>Dress code</small>
        <p>{inviteCard.dressCode}</p>
      </div>
      <div>
        <small>Additional Info</small>
        <p>{inviteCard.additionalInfo}</p>
      </div>
      <hr />
      <text>{inviteCard.intro}</text>
      <hr />
    </div>
  );
}
