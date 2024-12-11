import React from "react";

import "./Tabs.scss";

type TabKey = string;

interface Item {
  key: TabKey;
  label: React.ReactNode;
  children: React.ReactNode;
}

interface Props {
  items: Item[];
  activeKey?: TabKey;
  onChange?: (activeKey: TabKey) => void;
}

const Tabs = ({ items, activeKey = items?.[0]?.key, onChange }: Props) => {
  console.log("activeKey", activeKey);
  console.log("onChange", onChange);
  console.log("items", items);

  return (
    <div className={`ui-tabs`}>
      <div className={`tabs-list`}>
        {items.map((item: Item) => {
          return (
            <div
              key={item.key}
              className={`tabs-list-item ${item.key === activeKey ? "active" : ""}`}
              onClick={() => {
                onChange?.(item.key);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={`tabs-content`}>
        {items
          .filter((item) => item.key === activeKey)
          .map((item: Item) => {
            return (
              <div key={item.key} className={`tabs-content-item`}>
                {item.children}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tabs;
