import BuyCart from "../icons/BuyCart";
import HamburguerMenu from "../icons/HamburguerMenu";
import Logo from "../icons/Logo";
import User from "../icons/User";
import SearchBar from "../SearchBar";
import TextWithIcon from "../TextWithIcon";

export default function SearchHeader() {
  return (
    <div className="bg-[#FFFFFF] text-center text-[#666666] w-full h-[90px] flex items-center justify-between px-[120px]">
      <div className="flex items-center gap-5">
        <HamburguerMenu className="w-[48px] h-[48px]" />
        <Logo className="w-[138px] h-[28px]" />
      </div>
      <SearchBar placeholder="Search essentials, groceries and more..." />
      <div className="flex gap-8 ">
        <TextWithIcon icon={<User />} text={<p>Sign Up/Sign In</p>} />
        <span className="bg-[#D9D9D9] h-[27px] w-[3px]"></span>
        <TextWithIcon icon={<BuyCart />} text={<p>Cart</p>} />
      </div>
    </div>
  );
}
