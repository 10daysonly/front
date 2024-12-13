import React from "react";

import "./Button.scss";

interface Props {
  children: React.ReactNode;
  htmlType?: "button" | "submit";
  disabled?: boolean;
  variant?: "solid";
  pill?: boolean;
  color?: "default" | "primary" | "secondary" | "info" | "info-reverse" | "active";
  size?: "default" | "large" | "small";
  block?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  htmlType = "button",
  disabled,
  variant = "solid",
  pill,
  color = "default",
  size = "default",
  block,
  icon,
  iconPosition,
  onClick,
}: Props) => {
  return (
    <button
      type={htmlType}
      className={`btn variant-${variant} ${pill ? "pill" : ""} color-${color} size-${size} ${
        block ? `block` : ""
      }`}
      {...(onClick && { onClick })}
      {...(disabled && { disabled })}
    >
      {icon && iconPosition === "start" && <span className={`btn-icon-img`}>{icon}</span>}
      {children}
      {icon && iconPosition === "end" && <span className={`btn-icon-img`}>{icon}</span>}
    </button>
  );
};

export default Button;
