import { SVGProps } from "react"
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={8} r={4.75} stroke="#008ECC" strokeWidth={1.5} />
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 21v-2.5c0-1.25 2.25-2.5 6-2.5s6 1.25 6 2.5V21"
    />
  </svg>
)
export default User
