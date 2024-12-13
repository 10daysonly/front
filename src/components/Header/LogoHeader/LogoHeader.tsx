import React from "react";
import NextImage from "next/image";

import "../Header.scss";
import "./LogoHeader.scss";

import logo from "../imgs/logo.svg";

interface Props {
  onClick?: Function;
}

const LogoHeader = ({ onClick }: Props) => {
  return (
    <header className={`header logo-header`}>
      <h1 className={`logo`}>
        <a
          href="#"
          onClick={() => {
            onClick?.();
          }}
        >
          <NextImage src={logo.src} width={logo.width} height={logo.height} alt="" />
          <span className={`text`}>Ringley</span>
        </a>
      </h1>
    </header>
  );
};

export default LogoHeader;
