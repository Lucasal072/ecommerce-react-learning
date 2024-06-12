interface ICarouselItemProps {
  title: string;
  logoUrl: string;
  description: string;
  productUrl: string;
  color: string;
}

export const CarouselItem = ({
  title,
  logoUrl,
  description,
  productUrl,
  color,
}: ICarouselItemProps) => {
  return (
    <div
      className="h-[11rem]  w-[97%] rounded-2xl text-white flex flex-row justify-around items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-xl bg-">{title}</h1>
        <img className="w-1/3 h-6/3" src={logoUrl}></img>
        <span className="text-2xl">{description}</span>
      </div>
      <img className="w-1/3 h-6/3" src={productUrl}></img>
    </div>
  );
};
