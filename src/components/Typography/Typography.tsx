import "./Typography.scss";

interface Props {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Typography = ({ children, level = 1 }: Props) => {
  return <p className={`ui-typography level-${level}`}>{children}</p>;
};

export default Typography;
