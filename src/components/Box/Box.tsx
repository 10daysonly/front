import "./Box.scss";

interface Props {
  children: React.ReactNode;
  line?: boolean;
}

const Box = ({ children, line }: Props) => {
  return <div className={`box ${line ? `line-${line}` : ""}`}>{children}</div>;
};

export default Box;
