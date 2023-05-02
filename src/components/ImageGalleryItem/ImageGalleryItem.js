import { Modal } from 'components/Modal/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture }) => {
  return (
    <GalleryItem>
      <Image src={picture.webformatURL} alt={picture.tags} />
      <Modal picture={picture} />
    </GalleryItem>
  );
};
