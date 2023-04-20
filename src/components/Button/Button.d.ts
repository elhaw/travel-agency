import { ButtonHTMLAttributes, ReactNode } from "react";

declare module IButton {
  interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "sm" | "md" | "lg";
    variant: "filled" | "outlined" | "gohst";
    iconPosition?: "left" | "right" | "none";
    iconOnly: boolean;
    type: "submit" | "reset" | "button";
    children: ReactNode;
  }
}

export { IButton };
