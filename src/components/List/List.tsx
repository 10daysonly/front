import React from "react";

import "./List.scss";

import Item from "./Item";

export interface Props<T = any> {
  dataSource: T[];
  renderItem: (item: T) => React.ReactNode;
  grid?: boolean;
  reverse?: boolean;
}

const List = ({ dataSource, renderItem, grid, reverse }: Props) => {
  return (
    <ul className={`ui-list ${grid ? "grid" : ""} ${reverse ? "reverse" : ""}`}>
      {dataSource.map((item) => {
        return <li className={`list-li`}>{renderItem(item)}</li>;
      })}
    </ul>
  );
};

export default Object.assign(List, { Item });
