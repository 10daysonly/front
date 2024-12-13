import NextImage from "next/image";

import "./Onboarding.scss";

import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

import logo from "./imgs/logo.svg";

const Onboarding = () => {
  return (
    <Layout page="onboarding">
      <Main>
        <div className={`ui-fullpage`}>
          <div className={`onboarding`}>
            <div className={`onboarding-box`}>
              <div className={`onboarding-logo`}>
                <NextImage src={logo.src} width={logo.width} height={logo.height} alt={``} />
              </div>
              <p className={`onboarding-title`}>
                Make A <br />
                Ringley Letter !
              </p>
              <p className={`onboarding-subtitle`}>링글리를 통해 초대해 보아요!</p>
            </div>
          </div>
          <div className={`fixed-bottom`}>
            <p className="info-text">링글리와 함께 모임을 시작해요.</p>
            <ButtonBox>
              <Button block={true} size="large" color={`primary`}>
                시작하기
              </Button>
            </ButtonBox>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default Onboarding;
