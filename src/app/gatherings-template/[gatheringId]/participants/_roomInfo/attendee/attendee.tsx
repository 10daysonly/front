"use client";

import { useState } from "react";

import Typography from "@/components/Typography";
import Avatar from "@/components/Avatar";

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
    <>
      <div className="guestbook-list-box" onClick={showModal}>
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
      <AttendeeModal visible={isModalVisible} onClose={handleCancel} />
    </>
  );
}
