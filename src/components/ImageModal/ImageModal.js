import { ModalContent } from './ImageModal.styled';
import Modal from 'react-modal';
// import { Image } from '../ImageGalleryItem/ImageGalleryItem.styled';

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',

    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({
  image,
  isOpen,
  onClose,
  // , onBackdrop
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      // onBackdrop={onBackdrop}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <img src={image} alt="" />
      </ModalContent>
    </Modal>
  );
};
