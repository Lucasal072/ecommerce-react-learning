import { ComponentProps, useContext } from "react";
import { CarouselContext } from ".";

interface ICarouselPaginationProps extends ComponentProps<"div"> {}

export function CarouselPagination({ ...rest }: ICarouselPaginationProps) {
  const { currentIndex, itemsLength, elementLengthForPagination } =
    useContext(CarouselContext);
  const paginationLength = Math.ceil(itemsLength / elementLengthForPagination);
  const widthLimit = paginationLength * 15 + 24;
  return (
    <div
      className="flex flex-row gap-2"
      {...rest}
      style={{ width: widthLimit }}
    >
      {Array.from({ length: paginationLength }).map((_, index) => (
        <CarouselPaginationItem
          key={index}
          selected={currentIndex == index * elementLengthForPagination}
        />
      ))}
    </div>
  );
}

interface ICarouselPaginationItemProps extends ComponentProps<"div"> {
  selected?: boolean;
}

function CarouselPaginationItem({ selected }: ICarouselPaginationItemProps) {
  if (selected) {
    return <div className="bg-[#008ECC] w-[24px] h-[8px] rounded-full"></div>;
  }
  return <div className="bg-[#D9D9D9] w-[8px] h-[8px] rounded-full"></div>;
}
