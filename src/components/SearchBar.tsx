import Search from "./icons/Search";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center rounded-lg border-2 border-transparent gap-5 h-[48px] w-[507px] justify-around bg-[#F3F9FB] px-3 focus-within:border-[#008ECC]">
      <input
        className="h-full w-full focus:outline-0 bg-transparent"
        placeholder={placeholder}
      ></input>
      <Search className="w-[20px]" />
    </div>
  );
};

export default SearchBar;
