import { ModalContent, Overlay } from './Modal.styled';

export const Modal = ({ picture }) => {
  return (
    <Overlay>
      <ModalContent>
        <img src={picture.largeImageURL} alt={picture.tags} />
        <p>Hello, I'm modal</p>
      </ModalContent>
    </Overlay>
  );
};
