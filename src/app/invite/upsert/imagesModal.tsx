"use client";

import {
  Button,
  Card,
  Col,
  Image,
  Input,
  message,
  Modal,
  Row,
  Tabs,
  TabsProps,
  Upload,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard } from "./invite-cardSlice";
import { UploadOutlined } from "@ant-design/icons";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

export default function ImagesModal({ visible, onClose }: ModalComponentProps) {
  const [images, setImages] = useState([]);
  const dispatch = useAppDispatch();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const [activeKey, setActiveKey] = useState<string>("1"); // 활성화된 탭을 관리
  const [searchText, setSearchText] = useState("파티");

  useEffect(() => {
    if (activeKey == "3") {
      meme();
    }
  }, [activeKey]);

  useEffect(() => {
    if (activeKey == "3") {
      meme();
    }
  }, [searchText]);

  // 이미지 업로드
  const imageUpload = async (info: any) => {
    // 파일 상태가 "done"이거나 "uploading"인 경우 처리하지 않도록 설정
    if (info.file.status === "uploading") {
      return;
    }

    // 선택된 파일이 없을 경우 처리
    if (info.fileList.length === 0) {
      message.warning("파일을 선택해 주세요.");
      return;
    }

    const file = info.fileList[info.fileList.length - 1].originFileObj; // 선택된 파일
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result as string;
      console.log("Base64: ", base64String); // Base64 문자열 출력
      message.success("업로드 되었습니다.");
      const response = await axios.post("/api/upload", base64String);
    };

    reader.onerror = () => {
      message.error("파일 변환에 실패했습니다.");
    };

    reader.readAsDataURL(file); // 파일을 Base64로 읽기

    //네이버클라우드에 이미지 저장시키기 그리고 url 받아와서 리덕스에 저장하기
  };

  // 탭 클릭시
  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  // 짤 리스트 업데이트
  const meme = async () => {
    let images = await axios.get(
      `https://g.tenor.com/v1/search?q=${searchText}&key=LIVDSRZULELA&limit=4`
    );
    setImages(images.data.results.map((url: any) => url.media[0].gif.url));
  };

  // 이미지 클릭시
  const onClickImage = (e: any) => {
    dispatch(setInviteCard({ ...inviteCard, image: e.target.currentSrc }));
    onClose();
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "일러스트",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "사진",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "짤",
      children: (
        <Row gutter={16}>
          {images.map((src, index) => (
            <img alt={`image-${index}`} src={src} width={200} height={200} onClick={onClickImage} />
          ))}
        </Row>
      ),
    },
  ];

  return (
    <>
      <Modal title="카드 이미지 등록" open={visible} onCancel={onClose} footer={null}>
        <Input
          placeholder="검색"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Upload onChange={imageUpload}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Tabs activeKey={activeKey} onChange={handleTabChange} items={items} />
      </Modal>
    </>
  );
}
