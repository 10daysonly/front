import React from "react";

import "./Main.scss";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className={`main`}>{children}</main>;
};

export default Main;
