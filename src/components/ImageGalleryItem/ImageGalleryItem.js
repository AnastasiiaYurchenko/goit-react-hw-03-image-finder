import { ImageModal } from 'components/ImageModal/ImageModal';
// import Modal from 'react-modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    selectedImage: null,
  };

  setSelectedImage = () => {
    this.setState({ selectedImage: this.props.picture.largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  // handleBackdrop = e => {
  //   console.log(e.currentTarget);
  //   console.log(e.target);
  //   if (e.currentTarget !== e.target) {
  //     this.closeModal();
  //   }
  // };

  render() {
    const { selectedImage } = this.state;
    const { picture } = this.props;
    return (
      <GalleryItem>
        <Image
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={this.setSelectedImage}
        />
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            isOpen={selectedImage !== null}
            onClose={this.closeModal}
            // onBackdrop={this.handleBackdrop}
          />
        )}
      </GalleryItem>
    );
  }
}
