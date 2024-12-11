import React from "react";

import "./Layout.scss";

interface Props {
  children: React.ReactNode;
  page?: string;
}

const Layout = ({ children, page }: Props) => {
  return <div className={`layout ${page ? `${page}-page` : ``}`}>{children}</div>;
};

export default Layout;
