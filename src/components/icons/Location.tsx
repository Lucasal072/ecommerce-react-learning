import { SVGProps } from "react"
const Location = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.18 6.793a5.759 5.759 0 0 1 11.517.04v.065c-.04 2.067-1.194 3.978-2.609 5.472a15.14 15.14 0 0 1-2.693 2.217.698.698 0 0 1-.913 0 14.862 14.862 0 0 1-3.79-3.548A7.37 7.37 0 0 1 1.18 6.813v-.02Z"
      clipRule="evenodd"
    />
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.938 8.75a1.846 1.846 0 1 0 0-3.691 1.846 1.846 0 0 0 0 3.691Z"
    />
  </svg>
)
export default Location
