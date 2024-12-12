import { Radio } from "antd";
import { useState } from "react";

export default function RandomDraw() {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <p>랜덤 뽑기</p>
      <Radio.Group
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }} // 세로 정렬 및 간격 추가
      >
        <Radio.Button value="option1">마니또 뽑기(본인 제외 랜덤)</Radio.Button>
        <Radio.Button value="option2">랜덤 뽑기(완전 무작위)</Radio.Button>
      </Radio.Group>
    </div>
  );
}