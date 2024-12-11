import React from "react";
import NextImage from "next/image";

import "./Avatar.scss";

interface Props {
  src?: string;
  width?: number;
  height?: number;
  size?: "large";
}

const Avatar = ({ src, size, width, height }: Props) => {
  return (
    <div className={`ui-avatar ${size ? `size-${size}` : ""}`}>
      {src && <NextImage src={src} width={width} height={height} alt="" />}
    </div>
  );
};

export default Avatar;
