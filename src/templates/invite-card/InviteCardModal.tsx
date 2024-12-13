import React from "react";

import "./InviteCardModal.scss";

import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";
import Tabs from "@/components/Tabs";
import List from "@/components/List";
import Image from "@/components/Image";

import dummyImage2 from "@/components/Image/imgs/dummyImage2.png";

const InviateCardModal = () => {
  const dummyData = Array.from({ length: 3 }).map(() => ({ ...dummyImage2 }));
  const [activeKey, setActiveKey] = React.useState<string>("0"); // 활성화된 탭을 관리
  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };
  return (
    <>
      <div style={{ height: "700px" }}></div>
      <Modal open={true}>
        <div className="invite-card-modal">
          <div className={`search-header`}>
            <Button color="default">
              <Icon icon="backReverse" />
            </Button>
            <div className={`search-box`}>
              <Input variant="normal" placeholder="키워드를 검색해보세요." size="small" />
              <Icon icon="search" />
            </div>
          </div>
          <Tabs
            items={[
              { key: "0", label: "일러스트", children: "sdgsg" },
              { key: "1", label: "사진", children: "sdgsg" },
              {
                key: "2",
                label: "GIFS",
                children: (
                  <div className="image-list-box">
                    <List
                      grid={true}
                      dataSource={dummyData}
                      renderItem={(item) => {
                        return <Image src={item.src} width={item.width} height={item.height} />;
                      }}
                    ></List>
                  </div>
                ),
              },
            ]}
            activeKey={activeKey}
            onChange={handleTabChange}
          />
          <ButtonBox>
            <Button block={true} color="primary" icon={<Icon icon="camera" />} iconPosition="start">
              사진 업로드
            </Button>
          </ButtonBox>
        </div>
      </Modal>
    </>
  );
};

export default InviateCardModal;
