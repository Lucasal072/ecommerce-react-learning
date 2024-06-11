import React, { createContext, useContext } from "react";
import { ComponentProps, useEffect, useState } from "react";

interface ICarouselContext {
  handlePrevious?: () => void;
  handleNext?: () => void;
  currentIndex: number;
  itemsLength: number;
}

interface ICarouselRootProps extends ComponentProps<"div"> {
  intervalTime: number;
}

const CarouselContext = createContext<ICarouselContext>({
  currentIndex: 0,
  itemsLength: 0,
});

function CarouselRoot(props: ICarouselRootProps) {
  const { children, intervalTime, ...rest } = props;
  const [currentItem, setCurrentItem] = useState(0);
  const items = React.Children.toArray(children);
  const handlePrevious = () => {
    setCurrentItem((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentItem((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % items.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentItem]);
  return (
    <CarouselContext.Provider
      value={{
        handlePrevious,
        handleNext,
        currentIndex: currentItem,
        itemsLength: items.length,
      }}
    >
      <div {...rest}>{items[currentItem]}</div>
    </CarouselContext.Provider>
  );
}

interface ICarouselItemProps extends ComponentProps<"div"> {}

function CarouselItem({ children, ...rest }: ICarouselItemProps) {
  return <div {...rest}>{children}</div>;
}

interface ICarouselButtonProps extends ComponentProps<"button"> {}

function CarouselPreviousButton({ children, ...rest }: ICarouselButtonProps) {
  const { handlePrevious } = useContext(CarouselContext);
  return (
    <button onClick={handlePrevious} {...rest}>
      {children}
    </button>
  );
}

function CarouselNextButton({ children, ...rest }: ICarouselButtonProps) {
  const { handleNext } = useContext(CarouselContext);
  return (
    <button onClick={handleNext} {...rest}>
      {children}
    </button>
  );
}

interface ICarouselPaginationProps extends ComponentProps<"div"> {}

function CarouselPagination({ ...rest }: ICarouselPaginationProps) {
  const { currentIndex, itemsLength } = useContext(CarouselContext);
  const widthLimit = itemsLength * 15 + 24;
  return (
    <div
      className="flex flex-row gap-2"
      {...rest}
      style={{ width: widthLimit }}
    >
      {Array.from({ length: itemsLength }).map((_, index) => (
        <CarouselPaginationItem key={index} selected={currentIndex == index} />
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

const Carousel = {
  Root: CarouselRoot,
  Item: CarouselItem,
  Pagination: CarouselPagination,
  PreviousButton: CarouselPreviousButton,
  NextButton: CarouselNextButton,
};

export default Carousel;
