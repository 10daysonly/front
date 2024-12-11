import React from "react";

import "./ButtonBox.scss";

interface Props {
  children: React.ReactNode;
}

const ButtonBox = ({ children }: Props) => {
  return <div className={`btn-box`}>{children}</div>;
};

export default ButtonBox;
