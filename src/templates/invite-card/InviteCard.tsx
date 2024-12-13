import React from "react";

import "./InviteCard.scss";

import Layout from "@/components/Layout";
import { LogoHeader } from "@/components/Header";
import Main from "@/components/Main";

import ContentBox from "@/components/ContentBox";
import Image from "@/components/Image";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";
import Icon from "@/components/Icon";

import dummyImage from "@/components/Image/imgs/dummyImage.png";

const InviteCard = () => {
  return (
    <Layout page="invite-card">
      <LogoHeader />
      <Main>
        <ContentBox>
          <div className="img-edit">
            <Image src={dummyImage.src} />
            <Button color="primary" size="small" icon={<Icon icon="edit" />} iconPosition="start">
              수정
            </Button>
          </div>
          <FormGroup title="이벤트 제목" size={`large`} required={true}>
            <Input placeholder="" />
          </FormGroup>
          <FormGroup
            title={
              <>
                <Icon icon="calendar" />
                날짜와 시간
              </>
            }
          >
            <Input placeholder="" />
          </FormGroup>
          <FormGroup
            title={
              <>
                <Icon icon="location" />
                장소
              </>
            }
          >
            <Input placeholder="" />
          </FormGroup>
          <FormGroup
            title={
              <>
                <Icon icon="spark" />
                드레스 코드
              </>
            }
          >
            <Input placeholder="" />
          </FormGroup>
          <FormGroup title="기타입력 사항">
            <Input placeholder="" />
          </FormGroup>
          <FormGroup title="초대장" direction="vertical">
            <Textarea placeholder="마음을 담아 초대 메세지를 작성해 보세요." />
          </FormGroup>
          <ButtonBox>
            <Button block={true} size="large" color="info" onClick={() => {}}>
              취소
            </Button>
            <Button block={true} size="large" color="primary" onClick={() => {}}>
              작성 완료
            </Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default InviteCard;
