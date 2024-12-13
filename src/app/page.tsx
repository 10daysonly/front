"use client";

import NextImage from "next/image";

import { useRouter } from "next/navigation";

import "./onboarding-template/Onboarding.scss";
import "./onboarding-template/onboarding.module.css"; // custom css

import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

import logo from "./onboarding-template/imgs/logo.svg";

export default function Home() {
  const router = useRouter();
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
            <ButtonBox>
              <Button
                block={true}
                size="large"
                color={`primary`}
                onClick={() => {
                  router.push("/invite/upsert");
                }}
              >
                시작하기
              </Button>
            </ButtonBox>
          </div>
        </div>
      </Main>
    </Layout>
  );
}
