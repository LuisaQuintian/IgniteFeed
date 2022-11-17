import React, { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

//o ponto de interrogação indica que a prop é opcional
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({
  hasBorder,
  src = "https://github.com/LuisaQuintian.png",
  ...props
}: AvatarProps) => {
  const { avatar, avatarWithBorder } = styles;

  return (
    <img
      className={hasBorder ? avatarWithBorder : avatar}
      src={src}
      {...props}
    />
  );
};
