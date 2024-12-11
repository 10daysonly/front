import React from "react";

import "./Input.scss";

interface Props {
  variant?: "default" | "normal";
  size?: "default" | "small";
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = ({
  variant = "default",
  size,
  title,
  placeholder,
  value,
  onChange,
  onFocus,
}: Props) => {
  return (
    <div className={`ui-form ui-input variant-${variant} ${size ? `size-${size}` : ""}`}>
      <input
        value={value}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
