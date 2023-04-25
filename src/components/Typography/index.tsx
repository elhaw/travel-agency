import React from "react";
import styles from "./typography.module.css";
import { ITypography } from "./Typography";
import classNames from "classnames";

const Typography: React.FC<ITypography.IProps> = ({
  children,
  fontSize = "2xl",
  htmlTag: HtmlTag,
  fontFamily,
  fontWeight = "normal",
  varient,
}) => {
  const fontClassNames = classNames({
    "font-Montserrat": fontFamily === "Montserrat",
    "font-Tradegothic": fontFamily === "Tradegothic",
    "font-bold": fontWeight === "bold",
    "font-medium": fontWeight === "medium",
    "font-semibold": fontWeight === "semibold",
    "font-normal": fontWeight === "normal",
    // font size
    "text-xs": fontSize === "xs",
    "text-xl": fontSize === "xl",
    "text-sm": fontSize === "sm",
    "text-lg": fontSize === "lg",
    "text-base": fontSize === "base",
    "text-5xl": fontSize === "5xl",
    "text-4xl": fontSize === "4xl",
    "text-3xl": fontSize === "3xl",
    "text-2xl": fontSize === "2xl",
    //variant
  });
  const varientClassName = styles[`${varient}`]??"";
  return (
    <HtmlTag className={`${varientClassName} ${fontClassNames}`}>
      {" "}
      {children}
    </HtmlTag>
  );
};

export default Typography;
