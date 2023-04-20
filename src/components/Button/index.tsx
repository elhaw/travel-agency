import classNames from "classnames";
import { FC } from "react";
import { IButton } from "./Button";
import styles from "./Button.module.css";
const Button: FC<IButton.IProps> = ({
  size = "lg",
  iconPosition = "left",
  renderIcon,
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
      {iconPosition === "left" && renderIcon() }
      {hideButtonText ? <span>{children}</span> : null}
      {iconPosition === "right" && renderIcon() }
    </button>
  );
};

export default Button;
