"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./invite-card.module.css";
import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input, message } from "antd";
import koKR from "antd/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { EditOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { useRouter } from "next/navigation";
import ImagesModal from "./imagesModal";
import { setInviteCard } from "../../slice";
import { postGatherings } from "../auth/thunk";
dayjs.locale("ko");

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { fixButton } = useAppSelector((state) => state.navigationButtonSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true); // 모달을 열기
  };

  const handleCancel = () => {
    setIsModalVisible(false); // 모달을 닫기
  };

  const onFinish = async (values: any) => {
    console.log("폼 데이터:", values); // 제출된 데이터 출력
    const storedData = localStorage.getItem("user");
    if (storedData) {
      dispatch(
        setInviteCard({
          ...values,
          image: inviteCard.image,
          hostName: JSON.parse(storedData).name,
          hostEmail: JSON.parse(storedData).sub,
        })
      );
    } else {
      dispatch(
        setInviteCard({
          ...values,
          image: inviteCard.image,
        })
      ); // 리덕스로 상태 관리
    }

    // 새로 생성일 경우
    if (!fixButton) {
      // 쿠키나 세션 등으로 제어하기

      // 로그인 이력이 없을 경우
      if (!storedData) {
        router.push("/invite/auth/sending");
      } else {
        // 이전에 로그인 했을 경우 로그인 없이 바로 생성

        const fetchAction = await dispatch(postGatherings());

        if (postGatherings.rejected.match(fetchAction)) {
          console.log("오류");
        }
        router.push("/invite/auth/success");
      }
    } else {
      // 수정일 경우
      const response = await fetch(`/api/putGatherings/${inviteCard.gatheringId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // hostEmail: JSON.parse(storedData).name,
          // hostName: JSON.parse(storedData).name,
          name: values.name,
          image: values.image,
          location: values.location,
          dressCode: values.dressCode,
          additionalInfo: values.additionalInfo,
          intro: values.intro,
          meetAt: values.meetAt,
        }),
      });

      console.log(response);
      router.back();
      //경로로하면 찾아갈수있을지.. 데이터만 웹서비스에 담아주고 백하는게 맞는거같기도하고..
      // router.push("/invite-room/te");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  return (
    <div>
      <div>로고</div>
      <ImagesModal visible={isModalVisible} onClose={handleCancel} />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 300 }}
        initialValues={{ ...inviteCard, meetAt: dayjs(inviteCard.meetAt) }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <Form.Item name="image">
              <Image
                width={300}
                height={200}
                src={inviteCard.image} // inviteCard에서 이미지를 가져오기
                fallback="이미지가 없습니다" // 이미지가 없을 경우 대체 텍스트
              />
            </Form.Item>
          }
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
            name="meetAt"
            rules={[{ required: true, message: "모임 날짜 선택해주세요!" }]} // 필수 입력 필드
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </ConfigProvider>
        <Form.Item
          name="location"
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
          name="additionalInfo"
          rules={[{ required: true, message: "모임 기타 안내 사항 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="모임 기타 안내 사항 입력" />
        </Form.Item>
        <Form.Item
          name="intro"
          rules={[{ required: true, message: "이름을 입력해주세요!" }]} // 필수 입력 필드
        >
          <Input placeholder="초대장 메시지 입력" />
        </Form.Item>

        <Form.Item label={null}>
          {!fixButton ? (
            <Button type="primary" htmlType="submit">
              초대장 보내기 버튼
            </Button>
          ) : (
            <>
              <Button
                type="primary"
                onClick={() => {
                  router.back();
                }}
              >
                취소
              </Button>
              <Button type="primary" htmlType="submit">
                수정완료
              </Button>
            </>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}
