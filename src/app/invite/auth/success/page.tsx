"use client";

// import { Button, Form, Input, message } from "antd";
import { Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useAppSelector } from "@/app/store";

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import MsgInfo from "@/components/MsgInfo";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

import "./AuthSuccess.scss";
import "./auth-success.module.css"; // custom css

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
    <Layout page="auth-success">
      <Main>
        <MsgInfo
          icon="info"
          title={
            <>
              입력하신 이메일로 <br /> 메일을 보냈어요
            </>
          }
          subtitle={
            <>
              메일내 링크 확인 후 <br />
              친구들을 이벤트에 초대해보세요!
            </>
          }
        />
        <ButtonBox>
          <p className="info-text">메일을 받지 못하셨나요?</p>
          <Button block={true} size="large" color="primary" onClick={onClick}>
            다시 보내기
          </Button>
        </ButtonBox>
      </Main>
    </Layout>
  );
}
