import React from "react";
import NextImage from "next/image";

import "./Icon.scss";

import back from "./imgs/icon-back.svg";
import backReverse from "./imgs/icon-back-reverse.svg";
import camera from "./imgs/icon-camera.svg";
import edit from "./imgs/icon-edit.svg";
import search from "./imgs/icon-search.svg";
import calendar from "./imgs/icon-calendar.svg";
import calendarLarge from "./imgs/icon-calendar-large.svg";
import location from "./imgs/icon-location.svg";
import locationLarge from "./imgs/icon-location-large.svg";
import spark from "./imgs/icon-spark.svg";
import sparkLarge from "./imgs/icon-spark-large.svg";
import timeLarge from "./imgs/icon-time-large.svg";
import share from "./imgs/icon-share.svg";
import x from "./imgs/icon-x.svg";

interface IconMap {
  [key: string]: { src: string; width: number; height: number };
}
export type IconName = keyof typeof iconMap;

const iconMap: IconMap = {
  back,
  backReverse,
  camera,
  edit,
  search,
  calendar,
  calendarLarge,
  location,
  locationLarge,
  spark,
  sparkLarge,
  timeLarge,
  share,
  x,
};

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
