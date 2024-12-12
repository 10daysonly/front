interface Props {
  children?: React.ReactNode;
}

const Parent = ({ children }: Props) => {
  return <div className={`ui-dim-parent`}>{children}</div>;
};

export default Parent;
