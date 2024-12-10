"use client";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input } from "antd";

import React, { useEffect, useState } from "react";
import CardInfo from "./_roomInfo/cardInfo/cardInfo";
import GuestbookForm from "./_roomInfo/guestbookForm/guestbookForm";
import RandomDraw from "./_roomInfo/randomDraw/randomDraw";
import Attendee from "./_roomInfo/attendee/attendee";
import NavigationButton from "./_roomInfo/navigationButton/navigationButton";

export default function Home() {
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
