"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";
import styles from "./invite-room.module.css";
import { EditOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo";
import GuestbookForm from "./_roomInfo/guestbookForm";
import RandomDraw from "./_roomInfo/randomDraw";
export default function Home() {
  return (
    <div>
      <div>로고</div>
      <Image alt="card image" src={""} width={300} height={200} />
      <CardInfo />
      <RandomDraw />
      <GuestbookForm />
      {true == true ? (
        <>
          <Button type="primary">수정하기</Button>
          <Button type="primary">초대하기</Button>
          <Button type="primary">새로 만들기</Button>
          <Button type="primary">삭제하기</Button>
        </>
      ) : null}
    </div>
  );
}
