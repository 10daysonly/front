import React from "react";

import "./Layout.scss";

interface Props {
  children: React.ReactNode;
  page?: string;
}

const Layout = ({ children, page }: Props) => {
  return (
    <div className={`layout ${page ? `${page}-page` : ``}`}>
      <div className="layout-container">{children}</div>
    </div>
  );
};

export default Layout;
