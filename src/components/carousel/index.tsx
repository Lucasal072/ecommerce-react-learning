import { createContext } from "react";
import { ComponentProps, useEffect, useState } from "react";
import { CarouselNextButton, CarouselPreviousButton } from "./button";
import { CarouselPagination } from "./pagination";
import { CarouselBox } from "./box";

interface ICarouselContext {
  handlePrevious?: () => void;
  handleNext?: () => void;
  setItems: (items: any) => void;
  currentIndex: number;
  itemsLength: number;
  elementLengthForPagination: number;
}

interface ICarouselRootProps extends ComponentProps<"div"> {
  intervalTime: number;
  elementLengthForPagination: number;
}

export const CarouselContext = createContext<ICarouselContext>({
  elementLengthForPagination: 0,
  currentIndex: 0,
  itemsLength: 0,
  setItems: () => {},
});

function CarouselRoot(props: ICarouselRootProps) {
  const { children, intervalTime, elementLengthForPagination, ...rest } = props;
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const handlePrevious = () => {
    setCurrentItem(
      (prev) =>
        (prev - elementLengthForPagination + items.length) % items.length
    );
  };

  const handleNext = () => {
    setCurrentItem(
      (prev) => (prev + elementLengthForPagination) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(
        (prev) => (prev + elementLengthForPagination) % items.length
      );
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentItem, items]);
  return (
    <CarouselContext.Provider
      value={{
        handlePrevious,
        handleNext,
        currentIndex: currentItem,
        itemsLength: items.length,
        elementLengthForPagination,

        setItems,
      }}
    >
      <div {...rest}>{children}</div>
    </CarouselContext.Provider>
  );
}

const Carousel = {
  Root: CarouselRoot,
  Box: CarouselBox,
  Pagination: CarouselPagination,
  PreviousButton: CarouselPreviousButton,
  NextButton: CarouselNextButton,
};

export default Carousel;
