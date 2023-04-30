import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture }) => {
  return (
    <GalleryItem>
      <Image src={picture.webformatURL} alt={picture.tags} />
    </GalleryItem>
  );
};
