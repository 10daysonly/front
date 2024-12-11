import "./AuthEmail.scss";

import Layout from "@/components/Layout";
import Main from "@/components/Main";

import Typography from "@/components/Typography";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

const AuthEmail = () => {
  return (
    <Layout page="auth-email">
      <Main>
        {/* host */}
        <Typography>
          호스트 인증으로
          <br /> 이벤트 개최를 확정하세요
        </Typography>
        <Typography level={2}>
          작성하신 정보는 본인 확인과 이벤트 관리 목적으로만 사용되며, <br />
          다른 용도로는 이용되지 않아요.
        </Typography>

        {/* guest */}
        {/* <Typography>
          참석자로 등록 후
          <br /> 이벤트를 확인해 보세요
        </Typography>
        <Typography level={2}>입력하신 정보는 이벤트 진행 목적으로만 사용됩니다.</Typography> */}

        <div className="auth-email-box">
          <FormGroup title="이름">
            <Input />
          </FormGroup>
          <FormGroup title="이메일">
            <Input />
          </FormGroup>
        </div>
        <ButtonBox>
          <p className="info-text">입력한 이메일 주소가 올바른지 다시 한 번 확인해 주세요</p>
          <Button color="primary" size="large" block={true}>
            작성완료
          </Button>
          <Button color="primary" size="large" block={true}>
            인증하기
          </Button>
          <Button color="primary" size="large" block={true}>
            본인 확인하기
          </Button>
        </ButtonBox>
      </Main>
    </Layout>
  );
};

export default AuthEmail;
