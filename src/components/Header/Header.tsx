import React from "react";
import NextImage from "next/image";

import "./Header.scss";

import logo from "./imgs/logo.svg";

interface Props {}

const Header = ({}) => {
  return (
    <header className={`header`}>
      <h1 className={`logo`}>
        <a href="#">
          <NextImage src={logo.src} width={logo.width} height={logo.height} alt="" />
          <span className={`text`}>Ringley</span>
        </a>
      </h1>
    </header>
  );
};

export default Header;
