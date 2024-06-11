import { SVGProps } from "react"
const BuyCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.422 17.82a.766.766 0 0 1 0 1.53.764.764 0 1 1 0-1.53ZM16.675 17.82a.766.766 0 1 1-.002 1.532.766.766 0 0 1 .002-1.532Z"
      clipRule="evenodd"
    />
    <path
      stroke="#008ECC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m.75 1.25 2.08.36.963 11.473a1.802 1.802 0 0 0 1.797 1.653h10.912c.896 0 1.656-.658 1.785-1.546l.949-6.558a1.34 1.34 0 0 0-1.327-1.533H3.164M12.125 8.795h2.773"
    />
  </svg>
)
export default BuyCart
