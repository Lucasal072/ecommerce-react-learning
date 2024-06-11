import Truck from "../icons/Truck";
import Location from "../icons/Location";
import Discount from "../icons/Discount";
import TextWithIcon from "../TextWithIcon";

export default function TopHeader() {
  return (
    <div className="bg-[#F5F5F5] text-center text-[#666666] w-full h-[42px] flex items-center justify-between px-[120px]">
      <p>Welcome to worldwide Megamart!</p>
      <div className="flex gap-10">
        <TextWithIcon
          icon={<Location />}
          text={
            <p>
              Deliver to <strong>423651</strong>
            </p>
          }
        />
        <span className="bg-[#D9D9D9] h-[24px] w-[3px] rounded-[20px]"></span>
        <TextWithIcon icon={<Truck />} text={<p>Track your order</p>} />
        <span className="bg-[#D9D9D9] h-[24px] w-[3px] rounded-[20px]"></span>
        <TextWithIcon icon={<Discount />} text={<p>All Offers</p>} />
      </div>
    </div>
  );
}
