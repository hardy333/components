import React from "react";

const TriangleSvg = ({ fill = "#FF5D75", style }) => {
  return (
    <>
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
      >
        <path
          d="M5.13397 0.5C5.51887 -0.166667 6.48113 -0.166667 6.86603 0.5L11.1962 8C11.5811 8.66667 11.0999 9.5 10.3301 9.5L1.66987 9.5C0.900073 9.5 0.418948 8.66667 0.803848 8L5.13397 0.5Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default TriangleSvg;
