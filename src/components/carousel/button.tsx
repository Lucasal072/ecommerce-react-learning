import { ComponentProps, useContext } from "react";
import { CarouselContext } from ".";

interface ICarouselButtonProps extends ComponentProps<"button"> {}

export function CarouselPreviousButton({
  children,
  ...rest
}: ICarouselButtonProps) {
  const { handlePrevious } = useContext(CarouselContext);
  return (
    <button onClick={handlePrevious} {...rest}>
      {children}
    </button>
  );
}

export function CarouselNextButton({
  children,
  ...rest
}: ICarouselButtonProps) {
  const { handleNext } = useContext(CarouselContext);
  return (
    <button onClick={handleNext} {...rest}>
      {children}
    </button>
  );
}
