import React from "react";

import "./Input.scss";

interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = ({ title, placeholder, value, onChange, onFocus }: Props) => {
  return (
    <div className={`ui-form ui-input`}>
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
