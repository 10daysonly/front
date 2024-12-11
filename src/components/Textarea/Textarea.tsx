import React from "react";

import "./Textarea.scss";

interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({ title, placeholder, value, onChange, onFocus }: Props) => {
  return (
    <div className={`ui-form ui-textarea`}>
      <textarea
        value={value}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      ></textarea>
    </div>
  );
};

export default Textarea;
