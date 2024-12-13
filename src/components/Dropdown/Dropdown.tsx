import React from "react";

import "./Dropdown.scss";

interface Option {
  value: any;
  text: React.ReactNode;
}

interface Props {
  value: any;
  options: Option[];
  onChange: (value: any) => void;
}

const Dropdown = ({ value, options, onChange }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const selected = options.find((option) => option.value === value);

  return (
    <div className={`ui-dropdown`}>
      <div className="dropdown">
        <div
          className="select-box"
          onClick={() => {
            handleOpen();
          }}
        >
          {selected?.text}
        </div>
        {open && (
          <ul>
            {options
              .filter((option) => option.value !== value)
              .map((option) => {
                return (
                  <li
                    onClick={() => {
                      onChange(option.value);
                      handleClose();
                    }}
                  >
                    {option.text}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
