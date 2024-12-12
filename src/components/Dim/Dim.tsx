import "./Dim.scss";

import Parent from "./Parent";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  position?: "bottom";
}

const Dim = ({ children, open, position = "bottom" }: Props) => {
  return (
    open && (
      <div className={`ui-dim direction-${position}`}>
        <div className="dim-content">{children}</div>

        <div className="dim-blur"></div>
      </div>
    )
  );
};

export default Object.assign(Dim, { Parent });
