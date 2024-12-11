import React from "react";
import NextImage from "next/image";

import "./Icon.scss";

interface IconMap {
  [key: string]: { src: string; width: number; height: number };
}
export type IconName = keyof typeof iconMap;

const iconMap: IconMap = {};

interface Props {
  icon: IconName;
}

const Icon = ({ icon }: Props) => {
  const currentIcon = iconMap[icon];
  return (
    currentIcon && (
      <span className={`icon icon-${icon}`}>
        <NextImage
          src={currentIcon.src}
          width={currentIcon.width}
          height={currentIcon.height}
          alt=""
        />
      </span>
    )
  );
};

export default Icon;
