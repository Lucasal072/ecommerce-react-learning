import React, { ComponentProps, useContext, useEffect } from "react";
import { CarouselContext } from ".";

interface ICarouselBoxProps extends ComponentProps<"div"> {}

export function CarouselBox({ children, ...rest }: ICarouselBoxProps) {
  const { currentIndex, setItems, elementLengthForPagination } =
    useContext(CarouselContext);
  const items = React.Children.toArray(children);

  useEffect(() => {
    setItems(items);
  }, []);
  return (
    <div {...rest}>
      {items
        .slice(currentIndex, currentIndex + elementLengthForPagination)
        .map((item, index) => (
          <div className="w-full h-full flex" key={index}>
            {item}
          </div>
        ))}
    </div>
  );
}
