import React from "react";

import Meta from "./Meta";

interface Props {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Item: React.FC<Props> = ({ children, actions }) => {
  return (
    <div className="list-item">
      {children}
      {actions && <div className="list-item-actions">{actions}</div>}
    </div>
  );
};

export default Object.assign(Item, { Meta });
