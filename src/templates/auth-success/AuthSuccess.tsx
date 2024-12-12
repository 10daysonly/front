import Layout from "@/components/Layout";
import Main from "@/components/Main";

import MsgInfo from "@/components/MsgInfo";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

import "./AuthSuccess.scss";

const AuthSuccess = () => {
  return (
    <Layout page="auth-success">
      <Main>
        <MsgInfo
          icon="info"
          title={
            <>
              입력하신 이메일로 <br /> 메일을 보냈어요
            </>
          }
          subtitle={
            <>
              메일내 링크 확인 후 <br />
              친구들을 이벤트에 초대해보세요!
            </>
          }
        />
        <ButtonBox>
          <p className="info-text">메일을 받지 못하셨나요?</p>
          <Button block={true} size="large" color="primary">
            다시 보내기
          </Button>
        </ButtonBox>
      </Main>
    </Layout>
  );
};

export default AuthSuccess;
