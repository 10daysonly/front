import React from "react";

import "./AuthEmailDialog.scss";

import DialogCard from "@/components/DialogCard";
import MsgInfo from "@/components/MsgInfo";

const AuthEmailDialog = () => {
  return (
    <>
      <div style={{ height: "700px" }}></div>
      <DialogCard open={true}>
        <MsgInfo
          icon="confirm"
          title="입력하신 이메일로 전송했습니다."
          subtitle={
            <>
              메일내 링크 확인 후 <br />
              친구들을 이벤트에 초대해보세요!
            </>
          }
        />
      </DialogCard>
    </>
  );
};

export default AuthEmailDialog;
