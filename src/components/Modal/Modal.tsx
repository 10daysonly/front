import React from "react";
import NextImage from "next/image";

import "./Modal.scss";

import btnModalClose from "./imgs/btn-modal-close.svg";

interface Props {
  children: React.ReactNode;
  title?: React.ReactNode;
  open?: boolean;
  onClose?: Function;
}

const Modal = ({ children, title, open, onClose }: Props) => {
  if (!open) return null;
  return (
    <div className={`ui-modal`}>
      <div className={`modal-container`}>
        {onClose && (
          <button
            className="btn-modal-close"
            onClick={() => {
              onClose?.();
            }}
          >
            <NextImage
              src={btnModalClose.src}
              width={btnModalClose.width}
              height={btnModalClose.height}
              alt=""
            />
          </button>
        )}
        {title && (
          <div className={`modal-header`}>
            <div className={`modal-title`}>{title}</div>
          </div>
        )}
        <div className={`modal-body`}>{children}</div>
      </div>
      <div className={`modal-dim`}></div>
    </div>
  );
};

export default Modal;
