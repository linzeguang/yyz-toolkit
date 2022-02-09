import styled from "styled-components";
import { layout, space } from "styled-system";
import { BaseButtonProps } from "./types";

export const StyledButton = styled.button<BaseButtonProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  background-color: transparent;
  border: 0;
  border-radius: 8px;
  outline: 0;
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  transition: background-color 300ms, opacity 300ms;

  &:hover,
  &:active {
    opacity: 0.85;
  }

  ${layout}
  ${space}
`;
