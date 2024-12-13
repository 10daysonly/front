import React from "react";

import "./GuestListModal.scss";

import Modal from "@/components/Modal";
import List from "@/components/List";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";
import Text from "@/components/Text";
import Dropdown from "@/components/Dropdown";

const GuestListModal = () => {
  return (
    <>
      <div style={{ height: "700px" }}></div>
      <Modal open={true}>
        <div className="guest-list-modal">
          <div className="guest-list-box">
            <div className="guest-list-header">
              <Typography>
                <Text strong={true}>총 참석자</Text>: 15명
              </Typography>
              <div className="guest-list-header-right">
                <Icon icon="share" />
              </div>
            </div>
            <List
              reverse={true}
              dataSource={[{ name: "이승히" }, { name: "이승히" }]}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={
                      <>
                        <Dropdown
                          value="a"
                          options={[
                            { text: "참석예정", value: "a" },
                            { text: "참석불가", value: "b" },
                          ]}
                          onChange={() => {}}
                        />
                      </>
                    }
                  >
                    <List.Item.Meta avatar={<Avatar size="large" />} title={item.name} />
                  </List.Item>
                );
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GuestListModal;
