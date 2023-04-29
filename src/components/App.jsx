// import { GlobalStyle } from './GlobalStyle';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Component } from 'react';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    pictures: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34416785-706900f4c4344fdefb158122c&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(pictures => {
        console.log(pictures);
        return this.setState({ pictures: pictures.hits });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        <Searchbar />
        {this.state.loading && <Loader />}
        {this.state.pictures && <ImageGallery />}

        {/* <Modal /> */}
        <Button />
      </Layout>
    );
  }
}
