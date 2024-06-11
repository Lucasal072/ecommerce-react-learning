interface ImageProps {
  title: string;
  image_url?: string;
}

export const Image: React.FC<ImageProps> = ({ image_url, title }) => {
  return <img src={image_url} alt={title} className="w-[40rem]" />;
};
