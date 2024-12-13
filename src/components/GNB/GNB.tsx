import React from "react";

import "./GNB.scss";

import Image from "@/components/Image";

import editIcon from "./imgs/icon-gnb-edit.svg";
import shareIcon from "./imgs/icon-gnb-share.svg";
import inviteIcon from "./imgs/icon-gnb-invite.svg";
import deleteIcon from "./imgs/icon-gnb-delete.svg";

import editIconActive from "./imgs/icon-gnb-edit-active.svg";
import shareIconActive from "./imgs/icon-gnb-share-active.svg";
import inviteIconActive from "./imgs/icon-gnb-invite-active.svg";
import deleteIconActive from "./imgs/icon-gnb-delete-active.svg";

const gnbIcon = {
  edit: editIcon,
  share: shareIcon,
  invite: inviteIcon,
  delete: deleteIcon,
  editActive: editIconActive,
  shareActive: shareIconActive,
  inviteActive: inviteIconActive,
  deleteActive: deleteIconActive,
};

interface Menu {
  text: React.ReactNode;
  icon: keyof typeof gnbIcon;
  onClick: Function;
}

interface Props {
  active: string;
  menus: Menu[];
}

const GNB = ({ active, menus }: Props) => {
  return (
    <div className={`ui-gnb`}>
      <ul>
        {menus.map((menu) => {
          const isActive = menu.icon === active;
          const currentKey = `${menu.icon}${isActive ? "Active" : ""}` as keyof typeof gnbIcon;
          const currentIcon = gnbIcon?.[currentKey];

          console.log(currentKey, currentIcon);

          return (
            <li
              className={`${isActive ? "active" : "not-active"}`}
              onClick={() => {
                menu.onClick();
              }}
            >
              <span className={`gnb-icon`}>
                {currentIcon && <Image src={currentIcon} width={28} height={28} />}
              </span>
              <span className={`gnb-text`}>{menu.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GNB;
