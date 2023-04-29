// import { GlobalStyle } from './GlobalStyle';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export const App = () => {
  return (
    <Layout>
      <Searchbar />
      <ImageGallery />
      <Modal />
      <Button />
    </Layout>
  );
};
