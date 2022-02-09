import React from "react";
import { SvgProps } from "./types";

const Spinning: React.FC<SvgProps & { color: string }> = ({
  color = "#fff",
  ...rest
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="yyz-spinning"
      {...rest}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={color}
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Spinning;
