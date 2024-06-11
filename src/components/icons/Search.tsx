import { SVGProps } from "react"
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.825 15.566a6.742 6.742 0 1 0 0-13.483 6.742 6.742 0 0 0 0 13.483ZM13.514 13.864l2.643 2.636"
    />
  </svg>
)
export default Search