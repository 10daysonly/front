import React from "react";

import "./DatePickerModal.scss";

import Modal from "@/components/Modal";
import DatePicker from "@/components/DatePicker";
import Button from "@/components/Button";
import ButtonBox from "@/components/ButtonBox";

interface Props {
  open: boolean;
  onClose: Function;
  value: Date;
  onChange: (value: Date) => void;
}

const DatePickerModal = ({ open, onClose, value, onChange }: Props) => {
  const [stateValue, setStateValue] = React.useState<Date>(value);

  React.useEffect(() => {
    setStateValue(value);
  }, [value]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="date-picker-modal">
        <DatePicker value={stateValue} onChange={onChange} />
        <ButtonBox>
          <Button
            size="large"
            color="primary"
            block
            onClick={() => {
              onChange(stateValue);
            }}
          >
            선택완료
          </Button>
          <Button
            size="large"
            color="info"
            block
            onClick={() => {
              setStateValue(value);
            }}
          >
            지우기
          </Button>
        </ButtonBox>
      </div>
    </Modal>
  );
};

export default DatePickerModal;
