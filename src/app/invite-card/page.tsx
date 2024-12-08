"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./invite-card.module.css";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input, message } from "antd";
import koKR from "antd/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { EditOutlined } from "@ant-design/icons";
import ModalList from "./modal";
import ModalImageList from "./modal";
import { useAppSelector } from "../store";
import { useRouter } from "next/navigation";
dayjs.locale("ko");

export default function Home() {
  const [image, setImage] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true); // 모달을 열기
  };

  const handleCancel = () => {
    setIsModalVisible(false); // 모달을 닫기
  };

  const onFinish = (values: any) => {
    console.log("폼 데이터:", values); // 제출된 데이터 출력

    // 쿠키나 세션 등으로 제어하기
    if (true) {
      router.push("/auth-email");
    } else {
      router.push("/share-links");
    }
    message.success("폼이 성공적으로 제출되었습니다!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  return (
    <div>
      <div>로고</div>
      <ModalImageList visible={isModalVisible} onClose={handleCancel} />
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
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<Image alt="card image" src={inviteCard.image} width={300} height={200} />}
        >
          <h3>카드 이미지</h3>
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ position: "absolute", bottom: 10, right: 10 }}
            onClick={showModal}
          >
            수정 아이콘
          </Button>
        </Card>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "모임 제목을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="모임 제목 입력" />
        </Form.Item>
        <ConfigProvider locale={koKR}>
          <Form.Item
            name="date"
            rules={[{ required: true, message: "모임 날짜 선택해주세요!" }]} // 필수 입력 필드
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </ConfigProvider>
        <Form.Item
          name="place"
          rules={[{ required: true, message: "모임 장소 입력를 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="모임 장소 입력" />
        </Form.Item>
        <Form.Item
          name="dressCode"
          rules={[{ required: true, message: "모임 드레스코드를 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="모임 드레스코드 입력" />
        </Form.Item>
        <Form.Item
          name="desc"
          rules={[{ required: true, message: "모임 기타 안내 사항 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="모임 기타 안내 사항 입력" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "이름을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="초대장 메시지 입력" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            초대장 보내기 버튼
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
