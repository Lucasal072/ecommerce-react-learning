import { SVGProps } from "react"
const HamburguerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <rect width={48} height={48} fill="#F3F9FB" rx={10} />
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.75 15.25h24.5M12.75 24.25h17.409M12.75 33.25h11.5"
    />
  </svg>
)
export default HamburguerMenu
