import classNames from "classnames";
import { FC } from "react";
import { IButton } from "./Button";
import styles from "./Button.module.css";
import CustomIcon from "../CustomIcon";
const Button: FC<IButton.IProps> = ({
  size = "lg",
  iconPosition = "left",
  iconOnly = false,
  variant,
  type = "button",
  children,
  onClick,
}) => {
  const buttonClasses = classNames(
    `${styles.btn} ${styles[size]} ${styles[variant]}`
  );
  const hideButtonText = iconOnly === false;
  return (
    <button onClick={onClick} className={buttonClasses} type={type}>
      {iconPosition === "left" && <CustomIcon iconSize="sm" iconName="add" />}
      {hideButtonText ? <span>{children}</span> : null}
      {iconPosition === "right" && <CustomIcon iconSize="sm" iconName="add" />}
    </button>
  );
};

export default Button;
