import React from "react";

import "./FormGroup.scss";

interface Props {
  children?: React.ReactNode;
  title?: React.ReactNode;
  required?: boolean;
  size?: "default" | "large";
  direction?: "horizontal" | "vertical";
}

const FormGroup = ({ children, title, required, size, direction = "horizontal" }: Props) => {
  return (
    <div className={`ui-formgroup direction-${direction}`}>
      <div
        className={`formgroup-title ${required ? "required" : ""} ${size ? `size-${size}` : ""}`}
      >
        {title}
      </div>
      <div className={`formgroup-content`}>{children}</div>
    </div>
  );
};

export default FormGroup;
