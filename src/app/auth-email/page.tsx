"use client";

import { Button, Form, Input, message } from "antd";
import "./auth-email.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log("폼 데이터:", values); // 제출된 데이터 출력
    const response = await axios.post("/api/sendEmail", values);

    router.push("/email-success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  return (
    <div>
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
          rules={[{ required: true, message: "주최자 이름을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="주최자 이름 입력" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "주최자 이메일 입력을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="주최자 이메일 계정 입력" />
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
