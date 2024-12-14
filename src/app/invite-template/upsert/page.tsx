"use client";

import { useState } from "react";

import "./CustomInviteCard.scss";
import "./invite-card.module.css"; // custom css
import "./InviteCard.scss";

// import { Button, Card, ConfigProvider, DatePicker, Form, Image, Input, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { ConfigProvider, DatePicker, Form, Input, message } from "antd";
import koKR from "antd/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useRouter } from "next/navigation";
import ImagesModal from "./imagesModal";
// import { setInviteCard } from "./invite-cardSlice";
dayjs.locale("ko");

import "./InviteCard.scss";

import { LogoHeader } from "@/components/Header";
import Layout from "@/components/Layout";
import Main from "@/components/Main";

import ContentBox from "@/components/ContentBox";
import FormGroup from "@/components/FormGroup";
import Image from "@/components/Image";
// import Input from "@/components/Input";
// import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";
import Icon from "@/components/Icon";

import dummyImage from "@/components/Image/imgs/dummyImage.png";

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

  const onFinish = (values: any) => {
    console.log("폼 데이터:", values); // 제출된 데이터 출력

    if (!fixButton) {
      // dispatch(setInviteCard({ ...values, image: inviteCard.image })); // 리덕스로 상태 관리
      // 쿠키나 세션 등으로 제어하기
      if (true) {
        router.push("/invite/auth/sending");
      } else {
        router.push("/share-links");
      }
      message.success("폼이 성공적으로 제출되었습니다!");
    } else {
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
    <Layout page="invite-card">
      <LogoHeader />
      <ImagesModal visible={isModalVisible} onClose={handleCancel} />
      <Main>
        <ContentBox>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 300 }}
            initialValues={inviteCard}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="image">
              <div className="img-edit">
                <Image src={inviteCard.image || dummyImage.src} />
                <Button
                  color="primary"
                  size="small"
                  icon={<Icon icon="edit" />}
                  iconPosition="start"
                  onClick={() => {
                    showModal();
                  }}
                >
                  Edit
                </Button>
              </div>
            </Form.Item>
            <FormGroup title="이벤트 제목" size={`large`} required={true}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "모임 제목을 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input placeholder="" />
              </Form.Item>
            </FormGroup>
            <FormGroup
              title={
                <>
                  <Icon icon="calendar" />
                  날짜와 시간
                </>
              }
            >
              <ConfigProvider locale={koKR}>
                <Form.Item
                  name="meetAt"
                  rules={[{ required: true, message: "모임 날짜 선택해주세요!" }]} // 필수 입력 필드
                >
                  <DatePicker style={{ width: "100%" }} placeholder="" />
                </Form.Item>
              </ConfigProvider>
            </FormGroup>
            <FormGroup
              title={
                <>
                  <Icon icon="location" />
                  장소
                </>
              }
            >
              <Form.Item
                name="location"
                rules={[{ required: true, message: "모임 장소 입력를 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input placeholder="" />
              </Form.Item>
            </FormGroup>
            <FormGroup
              title={
                <>
                  <Icon icon="spark" />
                  드레스 코드
                </>
              }
            >
              <Form.Item
                name="dressCode"
                rules={[{ required: true, message: "모임 드레스코드를 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input placeholder="" />
              </Form.Item>
            </FormGroup>
            <FormGroup title="기타입력 사항">
              <Form.Item
                name="additionalInfo"
                rules={[{ required: true, message: "모임 기타 안내 사항 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input placeholder="" />
              </Form.Item>
            </FormGroup>
            <FormGroup title="초대장" direction="vertical">
              <Form.Item
                name="intro"
                rules={[{ required: true, message: "초대 메세지를 입력해주세요!" }]} // 필수 입력 필드
              >
                <Input.TextArea placeholder="마음을 담아 초대 메세지를 작성해 보세요." />
              </Form.Item>
            </FormGroup>
            <ButtonBox>
              {fixButton ? (
                <Button
                  block={true}
                  size="large"
                  color="primary"
                  onClick={() => {}}
                  htmlType="submit"
                >
                  작성 완료
                </Button>
              ) : (
                <>
                  <Button
                    block={true}
                    size="large"
                    color="info"
                    onClick={() => {
                      router.back();
                    }}
                  >
                    취소
                  </Button>
                  <Button block={true} size="large" color="primary" htmlType="submit">
                    수정완료
                  </Button>
                </>
              )}
            </ButtonBox>
          </Form>
        </ContentBox>
      </Main>
    </Layout>
  );
}
