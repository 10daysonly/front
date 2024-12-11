import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <div className={`ui-formgroup-title`}>{children}</div>;
};

export default Title;
