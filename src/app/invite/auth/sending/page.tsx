"use client";

import { Form, message } from "antd";
import "./auth-email.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard } from "@/app/slice";
import { useEffect, useState } from "react";
import { postGatherings } from "../thunk";

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
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [beforePreview, setBeforePreview] = useState(
    searchParams.get("d") == "preview" ? true : false
  );

  // submit
  const onFinish = async (values: any) => {
    // 미리보기 화면에서 왔을경우
    if (beforePreview) {
      function base64urlEncode(str: any) {
        return Buffer.from(str).toString("base64url");
      }

      // 헤더 생성
      const header = {
        alg: "none", // 서명 알고리즘을 'none'으로 설정
        typ: "JWT",
      };

      // 페이로드 생성
      const payload = {
        sub: "lotek60370@pokeline.com",
        name: "sddd",
      };

      // 각 부분을 Base64URL로 인코딩
      const encodedHeader = base64urlEncode(JSON.stringify(header));
      const encodedPayload = base64urlEncode(JSON.stringify(payload));

      // 서명 없는 JWT 생성
      const jwt = `${encodedHeader}.${encodedPayload}.`;

      router.push(`/gatherings/${searchParams.get("gatheringId")}/participants?token=${jwt}`);
    } else {
      // 카드생성에서 왔을경우
      const allOfInfo = { ...inviteCard, hostName: values.name, hostEmail: values.hostEmail };
      dispatch(setInviteCard(allOfInfo)); // 리덕스로 상태 관리
      console.log(allOfInfo);

      const fetchAction = await dispatch(postGatherings());

      if (postGatherings.rejected.match(fetchAction)) {
        console.log("오류");
      }

      message.warning("메일을 전송 하였습니다");
      router.push("/invite/auth/success");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("폼 제출 실패:", errorInfo);
    message.error("폼 제출에 실패했습니다. 입력 내용을 확인하세요.");
  };

  return (
    <Layout page="auth-email">
      <BackHeader
        onClick={() => {
          if (beforePreview) router.back(); // guest
          else router.push("/invite/upsert"); // host
        }}
      />
      <Main>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* host */}
          {!beforePreview && (
            <>
              <Typography>
                호스트 인증으로
                <br /> 이벤트 개최를 확정하세요
              </Typography>
              <Typography level={2}>
                작성하신 정보는 본인 확인과 이벤트 관리 목적으로만 사용되며, <br />
                다른 용도로는 이용되지 않아요.
              </Typography>
            </>
          )}

          {/* guest */}
          {beforePreview && (
            <>
              <Typography>
                참석자로 등록 후
                <br /> 이벤트를 확인해 보세요
              </Typography>
              <Typography level={2}>입력하신 정보는 이벤트 진행 목적으로만 사용됩니다.</Typography>
            </>
          )}

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
                {!beforePreview && "작성완료"} {/** host */}
                {beforePreview && "본인 인증하기"} {/** guest */}
              </Button>
            </Form.Item>
            {beforePreview && (
              <p className="info-text">참석이 힘들다면 참석자 목록에서 참가를 취소할 수 있어요.</p>
            )}
          </ButtonBox>
        </Form>
      </Main>
    </Layout>
  );
}
