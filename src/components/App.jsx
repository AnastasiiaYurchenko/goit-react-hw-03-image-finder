// import { GlobalStyle } from './GlobalStyle';
import { Button } from './Button/Button';
import { ListGallery } from './ImageGallery/ImageGallery.styled';
import { Layout } from './Layout/Layout.styled';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <Layout>
      <Searchbar />
      <ListGallery />
      <Modal />
      <Button />
    </Layout>
  );
};
