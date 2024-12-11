import "./Text.scss";

interface Props {
  children: React.ReactNode;
  strong?: boolean;
  size?: "defalut" | "large" | "small";
}

const Text = ({ children, strong, size }: Props) => {
  return (
    <span className={`ui-text ${strong ? "strong" : ""} ${size ? `size-${size}` : ""}`}>
      {children}
    </span>
  );
};

export default Text;
