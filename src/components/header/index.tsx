import { ButtonHeader } from "./ButtonHeader";
import SearchHeader from "./SearchHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <header className="w-full">
      <TopHeader />
      <SearchHeader />
      <ButtonHeader />
    </header>
  );
}
