"use client";

import React from "react";

import { Card, Col, message, Row, TabsProps, Upload, Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setInviteCard } from "../../slice";
import { UploadOutlined } from "@ant-design/icons";

import "./InviteCardModal.scss";

import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";
import Tabs from "@/components/Tabs";
import List from "@/components/List";
// import Image from "@/components/Image";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

export default function ImagesModal({ visible, onClose }: ModalComponentProps) {
  const [images, setImages] = useState([]);
  const dispatch = useAppDispatch();
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const [activeKey, setActiveKey] = useState<string>("3"); // 활성화된 탭을 관리
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (activeKey == "3") {
      meme();
    }
  }, [activeKey]);

  useEffect(() => {
    // if (activeKey == "3") {
    meme();
    // }
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
    const url = `https://g.tenor.com/v1/random?q=${
      searchText == "" ? "파티" : searchText
    }&key=LIVDSRZULELA&limit=10`;
    let images = await axios.get(url);
    setImages(images.data.results.map((url: any) => url.media[0].gif.url));
  };

  // 이미지 클릭시
  const onClickImage = (e: any) => {
    dispatch(setInviteCard({ ...inviteCard, image: e.target.currentSrc }));
    onClose();
  };

  const items = [
    // {
    //   key: "1",
    //   label: "일러스트",
    //   children: "Content of Tab Pane 1",
    // },
    // {
    //   key: "2",
    //   label: "사진",
    //   children: "Content of Tab Pane 2",
    // },
    {
      key: "3",
      label: "GIF's",
      children: (
        <div className="image-list-box">
          <List
            grid={true}
            dataSource={images}
            renderItem={(src: any) => {
              return <img alt={``} src={src} onClick={onClickImage} />;
            }}
          />
        </div>
      ),
    },
  ];

  // return (
  //   <>
  //     <Modal title="카드 이미지 등록" open={visible} onCancel={onClose} footer={null}>
  //       <Input
  //         placeholder="검색"
  //         value={searchText}
  //         onChange={(e) => {
  //           setSearchText(e.target.value);
  //         }}
  //       />
  //       <Upload onChange={imageUpload}>
  //         <Button icon={<UploadOutlined />}>Click to Upload</Button>
  //       </Upload>
  //       <Tabs activeKey={activeKey} onChange={handleTabChange} items={items} />
  //     </Modal>
  //   </>
  // );

  return (
    <Modal open={visible} onClose={onClose}>
      <div className="invite-card-modal">
        <div className={`search-header`}>
          <Button color="default">
            <Icon icon="backReverse" />
          </Button>
          <div className={`search-box`}>
            <Input
              variant="normal"
              placeholder="키워드를 검색해보세요."
              size="small"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Icon icon="search" />
          </div>
        </div>
        <Tabs items={items} activeKey={activeKey} onChange={handleTabChange} />
        <ButtonBox>
          <Button block={true} color="primary" icon={<Icon icon="camera" />} iconPosition="start">
            사진 업로드
          </Button>
        </ButtonBox>
      </div>
    </Modal>
  );
}
