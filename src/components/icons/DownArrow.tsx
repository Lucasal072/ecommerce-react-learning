import { SVGProps } from "react";

const DownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#008ECC"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 6.375 9 11.625l-5.25-5.25"
    />
  </svg>
);
export default DownArrow;
