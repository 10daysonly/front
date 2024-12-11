import "./DataInfo.scss";

interface Props {
  icon?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}

const DataInfo = ({ icon, title, children, direction = "horizontal" }: Props) => {
  return (
    <dl className={`ui-datainfo`}>
      {icon && <dt className={`datainfo-icon`}>{icon}</dt>}
      <div className="datainfo-box">
        <dt className={`datainfo-title`}>{title}</dt>
        <dd className={`datainfo-content`}>{children}</dd>
      </div>
    </dl>
  );
};

export default DataInfo;
