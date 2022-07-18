import { FC, useEffect } from "react";

import ImageItem from "../image-item/ImageItem";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { getImageState } from "../../../store/selectors/imageSelectors";

const ImageList: FC = () => {
  const { images, isLoading, error } = useAppSelector(getImageState);
  const { fetchImages } = useActions();

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!images.length) {
    return <div>No images found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {images.map((image) => (
        <ImageItem key={image._id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
