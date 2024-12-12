import React from "react";

import "./PreviewCard.scss";

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import Typography from "@/components/Typography";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Box from "@/components/Box";
import Dim from "@/components/Dim";

import dummyImage from "@/components/Image/imgs/dummyImage.png";

const PreviewCard = () => {
  return (
    <Layout page="preview-card">
      <Main>
        <Typography level={1}>연말 와인 파티의 밤</Typography>
        <div className={`preview-card-image`}>
          <Image src={dummyImage.src} width={dummyImage.width} height={dummyImage.height} />
        </div>
        <div className={`preview-card-info`}>
          <div className="preview-card-datetime">
            <div className="preview-card-date">12 월 22일 일요일</div>
            <div className="preview-card-time">오후 7시</div>
          </div>
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
          <Dim open={true} position="bottom">
            <p className="info-text">이벤트 내용과 참석자가 궁금하다면,</p>
            <Button color="primary">초대장 열어보기</Button>
          </Dim>
        </div>
      </Main>
    </Layout>
  );
};

export default PreviewCard;
