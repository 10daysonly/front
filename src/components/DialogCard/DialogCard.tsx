import React from "react";

import "./DialogCard.scss";

interface Props {
  children?: React.ReactNode;
  open: boolean;
}

const DialogCard = ({ children, open }: Props) => {
  return (
    open && (
      <div className={`ui-dialog-card`}>
        <div className={`dialog-card-container`}>
          <div className={`dialog-card-box`}>{children}</div>
        </div>
        <div className={`dialog-card-dim`}></div>
      </div>
    )
  );
};

export default DialogCard;
