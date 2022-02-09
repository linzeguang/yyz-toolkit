import { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import { PolymorphicComponentProps } from "../../types";

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  external?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, BaseButtonProps>;
