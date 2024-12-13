"use client";

import { Button, Form, Input, message } from "antd";
import "./auth-email.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard } from "@/app/slice";
import { useEffect, useState } from "react";
import { postGatherings } from "../thunk";

export default function Home() {
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [beforePreview, setBeforePreview] = useState(
    searchParams.get("d") == "preview" ? true : false
  );

  // submit
  const onFinish = async (values: any) => {
    const allOfInfo = { ...inviteCard, hostName: values.name, hostEmail: values.hostEmail };
    dispatch(setInviteCard(allOfInfo)); // 리덕스로 상태 관리
    console.log(allOfInfo);

    const fetchAction = await dispatch(postGatherings());

    if (postGatherings.rejected.match(fetchAction)) {
      console.log("오류");
    }
    message.warning("메일을 재전송 하였습니다");

    message.warning("메일을 전송 하였습니다");
    router.push("/invite/auth/success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  return (
    <div>
      {beforePreview == false ? (
        <Button
          type="default"
          onClick={() => {
            router.push("/invite/upsert");
          }}
        >
          뒤로가기
        </Button>
      ) : (
        ""
      )}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "이름을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="이름" />
        </Form.Item>
        <Form.Item
          name="hostEmail"
          rules={[{ required: true, message: "이메일 입력을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="이메일" />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            메일 보내기 버튼
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
