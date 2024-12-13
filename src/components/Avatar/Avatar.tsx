import React from "react";
import NextImage from "next/image";

import "./Avatar.scss";

interface Props {
  shape?: "circle" | "rect" | "star";
  src?: string;
  width?: number;
  height?: number;
  size?: "large";
  color?: "default" | "reverse";
}

const Avatar = ({ shape, src, size, color, width, height }: Props) => {
  return (
    <div
      className={`ui-avatar ${shape ? shape : ""} ${size ? `size-${size}` : ""} ${
        color ? `color-${color}` : " "
      }`}
    >
      {src && (
        <NextImage
          src={src}
          width={width}
          height={height}
          {...(!(width || height) && { layout: "fill" })}
          alt=""
        />
      )}
    </div>
  );
};

export default Avatar;
