"use client";

import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useAppSelector } from "@/app/store";

export default function Home() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const [clicked, setClicked] = useState(false); // 클릭 여부 상태
  const router = useRouter();

  const onClick = async (values: any) => {
    if (!clicked) {
      //이메일 전송
      // const response = await axios.post("/api/sendEmail", values);

      // const allOfInfo = { ...inviteCard, hostName: values.name, hostEmail: values.hostEmail };
      // console.log(allOfInfo);

      setClicked(true);
    } else {
      message.warning("메일을 확인 부탁드립니다.");
      router.push("/invite/auth/sending"); // 이동할 페이지 경로 설정
    }
  };

  return (
    <div>
      <div>이미지</div>
      <p>입력하신 이메일로 메일을 보냈어요. </p>
      <p>메일 내 링크 확인 후 친구들을 이벤트에 초대해 보세요!</p>
      <br />
      <p>
        메일을 받지 못하셨나요?<Button onClick={onClick}>다시 보내기</Button>
      </p>
    </div>
  );
}
