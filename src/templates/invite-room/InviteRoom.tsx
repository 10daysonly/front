import React from "react";

import "./InviteRoom.scss";

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import ContentBox from "@/components/ContentBox";
import Typography from "@/components/Typography";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Input from "@/components/Input";
import Avatar from "@/components/Avatar";
import ChatBubble from "@/components/ChatBubble";
import Box from "@/components/Box";
import Text from "@/components/Text";

import dummyImage from "@/components/Image/imgs/dummyImage.png";

const InviteRoom = () => {
  return (
    <Layout page="invite-room">
      <Main>
        <ContentBox>
          <div className={`invite-room-image`}>
            <Image src={dummyImage.src} width={dummyImage.width} height={dummyImage.height} />
          </div>
          <div className={`invite-info`}>
            <Typography level={1}>연말 와인 파티의 밤</Typography>
            <DataInfo icon={<Icon icon="calendarLarge" />} title="Date">
              12 월 22일 일요일
            </DataInfo>
            <DataInfo icon={<Icon icon="timeLarge" />} title="Time">
              오후 7시
            </DataInfo>
            <DataInfo icon={<Icon icon="locationLarge" />} title="Location">
              성수동 한옥집 와인 카페
            </DataInfo>
            <DataInfo icon={<Icon icon="sparkLarge" />} title="Dress code">
              빨간새, 화려한 색의 원피스
            </DataInfo>
            <DataInfo title="Additional info">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </DataInfo>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam, nesciunt
              voluptates ad officiis quidem, excepturi culpa omnis officia sapiente facere ut iusto
              sed velit? Obcaecati ut adipisci sed accusamus?
            </Box>
          </div>

          <div className="guestbook-list-box">
            <Typography>참석하는 사람</Typography>
            <div className="guestbook-list-content">
              <div className="guestbook-list">
                <Avatar size="large" />
                <Avatar size="large" />
                <Avatar size="large" />
                <Avatar size="large" />
                <div className="ellipsis">...</div>
              </div>
              <span className="count">25 명</span>
            </div>
          </div>
        </ContentBox>

        <div className="random-draw">
          <ContentBox>
            <Typography>랜덤 뽑기</Typography>
            <Box line={true}>
              <Button block={true} color={`active`}>
                <Text strong={true} size="large">
                  마니또 뽑기
                </Text>
                (본인 제외 랜덤)
              </Button>
              <Button block={true} color={`info-reverse`}>
                <Text strong={true} size="large">
                  랜덤 뽑기
                </Text>
                (완전 무작위)
              </Button>
              <div className="random-draw-result">
                <Box>결과값</Box>
              </div>
              <Button color={`primary`}>시작</Button>
            </Box>
          </ContentBox>
        </div>
        <div className="guestbook-form">
          <ContentBox>
            <Typography>방명록</Typography>
            <Box line={true}>
              <div className="guestbook-form-resgister">
                <Input />
                <Button>등록</Button>
              </div>
              <div className="guestbook-list">
                <ChatBubble avatar={<Avatar color="reverse" />} time="12:40">
                  Ant Design, a design language for background applications, is refined by Ant UED
                  Team
                </ChatBubble>
                <ChatBubble avatar={<Avatar color="reverse" />} time="12:40" direction="right">
                  Ant Design, a design language for background applications, is refined by Ant UED
                  Team
                </ChatBubble>
                <ChatBubble avatar={<Avatar color="reverse" />} time="12:40">
                  Ant Design, a design language for background applications, is refined by Ant UED
                  Team
                </ChatBubble>
              </div>
            </Box>
          </ContentBox>
        </div>
      </Main>
    </Layout>
  );
};

export default InviteRoom;
