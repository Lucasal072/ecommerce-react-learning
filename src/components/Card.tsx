import React, { CSSProperties } from "react";

export interface CardProps {
  title: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  style,
  imageUrl,
  imageStyle,
}) => {
  return (
    <div style={style}>
      <image />
      <img
        src={imageUrl}
        alt={title}
        style={imageStyle}
        className="w-[40rem
        
      ]"
      />
      <p>{title}</p>
    </div>
  );
};
