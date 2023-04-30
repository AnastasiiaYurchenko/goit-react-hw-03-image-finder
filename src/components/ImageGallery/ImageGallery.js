import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';
// import { Component } from 'react';
// import { fetchPictures } from 'api';
// import { ERROR_MSG } from 'components/App';

export const ImageGallery = ({ pictures }) => {
  return (
    <ListGallery>
      {pictures &&
        pictures.map(picture => {
          return <ImageGalleryItem key={picture.id} picture={picture} />;
        })}
    </ListGallery>
  );
};
