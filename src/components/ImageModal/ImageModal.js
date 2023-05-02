import { ModalContent } from './ImageModal.styled';
import Modal from 'react-modal';
// import { Image } from '../ImageGalleryItem/ImageGalleryItem.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ image, isOpen, onClose }) => {
  // const { image } = this.props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <img src={image} alt="" />
        <p>Hello, I'm modal</p>
      </ModalContent>
    </Modal>
  );
};
