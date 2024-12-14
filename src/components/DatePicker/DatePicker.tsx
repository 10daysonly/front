import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { FC, useCallback, useMemo, useState } from "react";
import { Button, Datepicker, Page, setOptions } from "@mobiscroll/react";
import { MbscDatepickerOptions } from "@mobiscroll/react";

import "./DatePicker.scss";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

interface Props {
  value?: Date;
  onChange: (value: Date) => void;
  controls?: ("calendar" | "time")[];
}

const DatePicker = ({ value = new Date(), onChange, controls = ["calendar", "time"] }: Props) => {
  const handleChange = (args: { value: Date }) => {
    onChange?.(args.value);
  };
  return (
    <div className={`ui-date-picker`}>
      <Datepicker
        value={value}
        onChange={handleChange}
        display="inline"
        controls={controls}
        showOnClick={false}
        showOnFocus={false}
        touchUi={true}
        inputComponent="input"
      />
    </div>
  );
};
export default DatePicker;
