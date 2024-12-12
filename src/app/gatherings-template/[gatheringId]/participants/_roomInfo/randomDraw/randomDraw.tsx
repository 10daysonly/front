import { Radio } from "antd";
import { useState } from "react";

import ContentBox from "@/components/ContentBox";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Box from "@/components/Box";
import Text from "@/components/Text";

export default function RandomDraw() {
  const [value, setValue] = useState("option1");

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <div className="random-draw">
      <ContentBox>
        <Typography>랜덤 뽑기</Typography>
        <Box line={true}>
          <Button
            block={true}
            color={value === `option1` ? "active" : "info-reverse"}
            onClick={() => {
              setValue("option1");
            }}
          >
            <Text strong={true} size="large">
              마니또 뽑기
            </Text>
            (본인 제외 랜덤)
          </Button>
          <Button
            block={true}
            color={value === `option2` ? "active" : "info-reverse"}
            onClick={() => {
              setValue("option2");
            }}
          >
            <Text strong={true} size="large">
              랜덤 뽑기
            </Text>
            (완전 무작위)
          </Button>
          {/* <div className="random-draw-result">
            <Box>결과값</Box>
          </div> */}
          <Button color={`primary`}>시작</Button>
        </Box>
      </ContentBox>
    </div>
  );
}
