import React from "react";
import NextImage from "next/image";

import "./MsgInfo.scss";

const msgIcon = {
  confirm,
};

type MsgIcon = keyof typeof msgIcon;

interface Props {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: MsgIcon;
}

import confirm from "./imgs/msg-icon-confirm.svg";

const MsgInfo = ({ title, subtitle, icon }: Props) => {
  return (
    <div className={`ui-msg-info`}>
      {icon && (
        <div className={`msg-info-icon msg-info-icon-${icon}`}>
          <NextImage
            src={msgIcon[icon].src}
            width={msgIcon[icon].width}
            height={msgIcon[icon].height}
            alt=""
          />
        </div>
      )}
      <p className={`msg-info-title`}>{title}</p>
      <p className={`msg-info-subtitle`}>{subtitle}</p>
    </div>
  );
};

export default MsgInfo;
