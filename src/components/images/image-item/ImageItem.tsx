import { FC } from "react";

interface ImageItemProps {
  image: { url: string; title: string; description: string };
}

const ImageItem: FC<ImageItemProps> = ({ image }) => {
  return <img src={image.url} alt={image.title}></img>;
};

export default ImageItem;
