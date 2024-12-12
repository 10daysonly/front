"use client";

import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import DataInfo from "@/components/DataInfo";
import Box from "@/components/Box";

export default function CardInfo() {
  return (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam, nesciunt voluptates
        ad officiis quidem, excepturi culpa omnis officia sapiente facere ut iusto sed velit?
        Obcaecati ut adipisci sed accusamus?
      </Box>
    </div>
  );
}
