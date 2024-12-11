import React from "react";
import NextImage from "next/image";

import "./Image.scss";

interface Props {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  circle?: boolean;
}

const Image = ({ src, width, height, alt = "", circle }: Props) => {
  return (
    <div className={`ui-image ${circle ? `circle` : ""}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...(!(width || height) && { layout: "fill" })}
        objectFit="cover"
      />
    </div>
  );
};

export default Image;
