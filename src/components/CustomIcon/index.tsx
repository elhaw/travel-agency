import { FC } from "react";
import { ICusomIcon } from "./CustomIcon";
import styles from "./CustomIcon.module.css";
import classNames from "classnames";
const CustomIcon: FC<ICusomIcon.IProps> = ({ iconName, iconSize = "md" }) => {
  const iconSizeClass = classNames(styles[iconSize]);
  return (
    <span
      className={`icon-${iconName} ${iconSizeClass} text-inherit font-bold`}
    ></span>
  );
};

export default CustomIcon;
