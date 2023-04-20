import classNames from "classnames";
import { FC } from "react";
import { IButton } from "./Button";
import styles from "./Button.module.scss";
const Button: FC<IButton.IProps> = ({
  size = "lg",
  disabled = false,
  iconPosition = "left",
  renderIcon,
  iconOnly = false,
  variant,
  type = "button",
  children,
  onClick,
}) => {
  const buttonClasses = classNames(
    `${styles.btn} ${styles[`size-${size}`]} ${styles[variant]}`
  );
  const hideButtonText = iconOnly === false;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
      type={type}
    >
      {iconPosition === "left" && renderIcon && renderIcon()}
      {hideButtonText ? <span>{children}</span> : null}
      {iconPosition === "right" && renderIcon && renderIcon()}
    </button>
  );
};

export default Button;
