import React from "react";

interface Props {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const Meta = ({ avatar, title, description }: Props) => {
  return (
    <div className={`list-item-meta`}>
      <div className={`list-item-meta-avatar`}>{avatar}</div>
      <div className={`list-item-meta-content`}>
        {title && (
          <div className={`list-item-meta-title ${!description ? "main-style" : ""}`}>{title}</div>
        )}
        {description && <div className={`list-item-meta-description`}>{description}</div>}
      </div>
    </div>
  );
};

export default Meta;
