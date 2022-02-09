import styled from "styled-components";
import { layout, space, typography } from "styled-system";
import { TextProps } from ".";

const Text = styled.div<TextProps>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis, lineClamp }) =>
    lineClamp
      ? `overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;`
      : ellipsis
      ? `white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;`
      : ""}

  ${space}
  ${typography}
  ${layout}
`;

export default Text;
