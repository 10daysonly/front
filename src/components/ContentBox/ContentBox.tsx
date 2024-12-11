import React from "react";

import "./ContentBox.scss";

interface Props {
  children: React.ReactNode;
}

const ContentBox = ({ children }: Props) => {
  return <div className={`content-box`}>{children}</div>;
};

export default ContentBox;
