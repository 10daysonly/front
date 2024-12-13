import React from "react";
import NextImage from "next/image";

import "../Header.scss";
import "./BackHeader.scss";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

interface Props {
  onClick?: Function;
}

const BackHeader = ({ onClick }: Props) => {
  return (
    <header className={`header back-header`}>
      <Button
        color="default"
        onClick={() => {
          onClick?.();
        }}
      >
        <Icon icon="back" />
      </Button>
    </header>
  );
};

export default BackHeader;
