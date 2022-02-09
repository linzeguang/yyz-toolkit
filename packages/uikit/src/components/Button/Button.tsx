import React, { cloneElement, ElementType, isValidElement } from "react";
import { getExternalLinkProps } from "../../utils";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>) => {
  const {
    startIcon,
    endIcon,
    external,
    className,
    disabled,
    children,
    ...rest
  } = props;
  const internalProps = external ? getExternalLinkProps() : {};

  return (
    <StyledButton disabled={disabled} {...internalProps} {...rest}>
      {isValidElement(startIcon) && cloneElement(startIcon)}
      {children}
      {isValidElement(endIcon) && cloneElement(endIcon)}
    </StyledButton>
  );
};

Button.defaultProps = {
  external: false,
  disabled: false,
};

export default Button;
