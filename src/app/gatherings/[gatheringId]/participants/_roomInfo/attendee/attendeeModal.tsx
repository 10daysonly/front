"use client";

import {
  // Avatar,
  // Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  // List,
  message,
  // Modal,
  Row,
  Select,
  Skeleton,
  Tabs,
  TabsProps,
  Upload,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { UploadOutlined } from "@ant-design/icons";

import "./GuestListModal.scss";

import Modal from "@/components/Modal";
import List from "@/components/List";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import Text from "@/components/Text";
import Dropdown from "@/components/Dropdown";
import ButtonBox from "@/components/ButtonBox";
import { useParams, useSearchParams } from "next/navigation";
import { decodeToken } from "@/app/utils/token";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

export default function AttendeeModal({ visible, onClose }: ModalComponentProps) {
  interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const { inviteCard } = useAppSelector((state) => state.inviteCardSlice);
  const { gatheringId } = useParams();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // 쿼리스트링에서 'token'의 값을 가져옴
  let decoded: any = decodeToken(token as string);
  // const fakeDataUrl = `https://randomuser.me/api/?results=${inviteCard.participants?.length}&inc=name,gender,email,nat,picture&noinfo`;
  // useEffect(() => {
  //   setList(inviteCard.participants);
  // setList(res.results);
  // }, []);

  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(inviteCard.participants?.length)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       }))
  //     )
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event("resize"));
  //     });
  // };

  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //       <Button size="small" color="primary" onClick={onLoadMore}>
  //         loading more
  //       </Button>
  //     </div>
  //   ) : null;

  const changeStatus = (e: any) => {
    const change = async () => {
      const response = await axios.patch(
        `/api/patchParticipants/${gatheringId}`,
        JSON.stringify({ imageUrl: e.imageUrl, status: e.status, token: token }),
        {
          headers: {
            "Content-Type": "application/json", // 헤더 설정
          },
        }
      );
    };
    change();
  };
  return (
    <>
      <Modal open={visible} onClose={onClose}>
        <div className="guest-list-modal">
          <div className="guest-list-box">
            <div className="guest-list-header">
              <Typography>
                <Text strong={true}>총 참석자</Text>: {inviteCard.participants?.length}명
              </Typography>
              <div className="guest-list-header-right">
                <Icon icon="share" />
              </div>
            </div>
            <List
              reverse={true}
              dataSource={inviteCard.participants}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={
                      <>
                        <Select
                          onChange={changeStatus}
                          value={item.status}
                          options={[
                            { label: "참석예정", value: "attending" },
                            { label: "참석불가", value: "b" },
                          ]}
                        />
                      </>
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar size="large" src={item.imageUrl} />}
                      title={item.name}
                    />
                  </List.Item>
                );
              }}
            />
            {/* <ButtonBox>{loadMore}</ButtonBox> */}
          </div>
        </div>
      </Modal>
    </>
  );
}
