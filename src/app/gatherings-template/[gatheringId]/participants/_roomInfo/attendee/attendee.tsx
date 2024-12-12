"use client";

import { Button } from "antd";
import { useState } from "react";
import AttendeeModal from "./attendeeModal";

export default function Attendee() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true); // 모달을 열기
  };

  const handleCancel = () => {
    setIsModalVisible(false); // 모달을 닫기
  };

  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <Button type="primary" onClick={showModal}>
        <small>참석예정자 수</small>
        <p>15 명</p>
      </Button>
      <AttendeeModal visible={isModalVisible} onClose={handleCancel} />
    </div>
  );
}
