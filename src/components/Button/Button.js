import { ButtonLoad } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoad type="submit" onClick={onClick}>
      Load more
    </ButtonLoad>
  );
};
