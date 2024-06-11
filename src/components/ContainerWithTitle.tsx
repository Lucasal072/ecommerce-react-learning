import RightArrow from "./icons/RightArrow";
import TextWithIcon from "./TextWithIcon";

interface ContainerWithTitleProps {
  title: string;
  children: React.ReactNode;
}

const ContainerWithTitle: React.FC<ContainerWithTitleProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-auto gap-5">
      <div className="flex justify-between items-center w-full border-b-[1px] border-[#EDEDED]">
        <h1 className="capitalize border-b-[3px] border-[#008ECC]">{title}</h1>
        <TextWithIcon
          icon={<RightArrow />}
          text={<p className="text-black">View All</p>}
          itemOrientation="right"
        />
      </div>
      <div className="flex gap-5 w-full items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default ContainerWithTitle;
