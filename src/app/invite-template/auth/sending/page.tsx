"use client";

import React from "react";

import { Form, message } from "antd";
import "./auth-email.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppSelector } from "@/app/store";

import "./AuthEmail.scss";
import "./CustomAuthEmail.scss";

import Layout from "@/components/Layout";
import { BackHeader } from "@/components/Header";
import Main from "@/components/Main";

import Typography from "@/components/Typography";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

export default function Home() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const router = useRouter();

  const onFinish = async (values: any) => {
    const allOfInfo = { ...inviteCard, hostName: values.name, hostEmail: values.hostEmail };
    console.log(allOfInfo);

    const response = await axios.post("/api/sendEmail", allOfInfo, {
      headers: {
        "Content-Type": "application/json", // 헤더 설정
      },
    });
    console.log(response);
    message.warning("메일을 재전송 하였습니다");

    message.warning("메일을 전송 하였습니다");
    router.push("/invite/auth/success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  const [formState, setFormState] = React.useState({
    name: "",
    hostEmail: "",
  });
  const handleFormState = (key: string, value: string) => {
    return setFormState({ ...formState, [key]: value });
  };

  const handleFinish = () => {
    const isValid = getIsValid();
    const errorInfo = {};

    if (!isValid) return onFinishFailed(errorInfo);

    const values = {};
    onFinish(values);
  };

  const getIsValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!(formState.name && formState.hostEmail && emailRegex.test(formState.hostEmail));
  };

  return (
    <Layout page="auth-email">
      <BackHeader />
      <Main>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* host */}
          <Typography>
            호스트 인증으로
            <br /> 이벤트 개최를 확정하세요
          </Typography>
          <Typography level={2}>
            작성하신 정보는 본인 확인과 이벤트 관리 목적으로만 사용되며, <br />
            다른 용도로는 이용되지 않아요.
          </Typography>

          {/* guest */}
          {/* <Typography>
          참석자로 등록 후
          <br /> 이벤트를 확인해 보세요
        </Typography>
        <Typography level={2}>입력하신 정보는 이벤트 진행 목적으로만 사용됩니다.</Typography> */}

          <div className="auth-email-box">
            <FormGroup title="이름">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "이름을 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input />
              </Form.Item>
            </FormGroup>
            <FormGroup title="이메일">
              <Form.Item
                name="hostEmail"
                rules={[{ required: true, message: "이메일 입력을 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input />
              </Form.Item>
            </FormGroup>
          </div>
          <ButtonBox>
            {/* <p className="info-text">입력한 이메일 주소가 올바른지 다시 한 번 확인해 주세요</p> */}
            <Form.Item label={null}>
              <Button color="primary" size="large" block={true} htmlType="submit">
                작성완료
              </Button>
            </Form.Item>
            {/* <Button color="primary" size="large" block={true}>
            인증하기
          </Button>
          <Button color="primary" size="large" block={true}>
            본인 확인하기
          </Button> */}
            {/* <p className="info-text">참석이 힘들다면 참석자 목록에서 참가를 취소할 수 있어요.</p> */}
          </ButtonBox>
        </Form>
      </Main>
    </Layout>
  );
}
