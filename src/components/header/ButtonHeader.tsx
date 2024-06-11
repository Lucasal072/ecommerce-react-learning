import { Button } from "../Button";
import DownArrow from "../icons/DownArrow";
import TextWithIcon from "../TextWithIcon";

export const ButtonHeader = () => {
  return (
    <div className="bg-[#FFFFFF] text-center text-black text-[13px] w-full h-[5.625rem] flex items-center justify-between px-[120px] gap-1 flex-wrap">
      <Button className="bg-[#008ECC] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow color="#FFFFFF" />}
          text={<p className="text-white">Groceries</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Premium Fruits</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit  flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Home & Kitchen</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Fashion</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Electronics</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Beauty</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Home Improvement</p>}
          itemOrientation="right"
        />
      </Button>
      <Button className="bg-[#F3F9FB] rounded-full w-fit flex justify-center p-2">
        <TextWithIcon
          icon={<DownArrow />}
          text={<p>Sports, Toys & Luggage</p>}
          itemOrientation="right"
        />
      </Button>
    </div>
  );
};
