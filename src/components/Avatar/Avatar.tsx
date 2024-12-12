import React from "react";
import NextImage from "next/image";

import "./Avatar.scss";

interface Props {
  src?: string;
  width?: number;
  height?: number;
  size?: "large";
  color?: "default" | "reverse";
}

const Avatar = ({ src, size, color, width, height }: Props) => {
  return (
    <div className={`ui-avatar ${size ? `size-${size}` : ""} ${color ? `color-${color}` : " "}`}>
      {src && <NextImage src={src} width={width} height={height} alt="" />}
    </div>
  );
};

export default Avatar;
