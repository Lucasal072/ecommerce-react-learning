import Carousel from "./carousel";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

interface ICarouselContainerProps {
  url: string;
}

export const CarouselContainer = ({ url }: ICarouselContainerProps) => {
  return (
    <div className="h-[19.75rem] bg-[#212844] w-full rounded-2xl text-white flex flex-row justify-around items-center">
      <Carousel.PreviousButton className="bg-[#F3F9FB] h-[3rem] w-[3rem] flex items-center justify-center rounded-full min-w-[3rem] border-white border-2">
        <LeftArrow />
      </Carousel.PreviousButton>

      <div className="flex flex-col">
        <h2 className="text-xl">Best Deal Online on smart watches</h2>
        <h1 className="text-4xl">SMART WEARABLE.</h1>
        <h2 className="text-xl">UP to 80% OFF</h2>
        <Carousel.Pagination />
      </div>
      <img className="w-1/3 lg:w-[13.76rem]" src={url}></img>
      <Carousel.NextButton className="bg-[#F3F9FB] h-[3rem] w-[3rem] flex items-center justify-center rounded-full min-w-[3rem] border-2 border-white">
        <RightArrow />
      </Carousel.NextButton>
    </div>
  );
};
