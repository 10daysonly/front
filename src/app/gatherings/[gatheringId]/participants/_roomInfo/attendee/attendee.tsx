"use client";

import { useEffect, useState } from "react";
import AttendeeModal from "./attendeeModal";

import Typography from "@/components/Typography";
import Avatar from "@/components/Avatar";
import { useParams, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store";

export default function Attendee() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { gatheringId } = useParams();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴
  const [count, setCount] = useState(0);

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
          <span className="count">{inviteCard.participants?.length} 명</span>
        </div>
      </div>
      <AttendeeModal visible={isModalVisible} onClose={handleCancel} />
    </>
  );
}
