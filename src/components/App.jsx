import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { fetchPictures } from 'api';

export const ERROR_MSG = 'Something went wrong, please try again';

export class App extends Component {
  state = {
    searchName: '',
    pictures: null,
    loading: false,
    error: null,
  };

  handleFormSearch = searchName => {
    console.log(searchName);
    this.setState({ searchName });
  };

  // async componentDidMount() {
  //   this.setState({ loading: true, error: null });

  //   try {
  //     const fetchedPictures = await fetchPictures();

  //     this.setState({ pictutes: fetchedPictures.hits });
  //   } catch (error) {
  //     this.setState({ error: ERROR_MSG });
  //   } finally {
  //     this.setState({ loading: false });
  //   }

  // fetch(
  //   'https://pixabay.com/api/?q=cat&page=1&key=34416785-706900f4c4344fdefb158122c&image_type=photo&orientation=horizontal&per_page=12'
  // )
  //   .then(res => res.json())
  //   .then(pictures => {
  //     console.log(pictures);
  //     return this.setState({ pictures: pictures.hits });
  //   })
  //   .finally(() => this.setState({ loading: false }));
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      console.log('Change name');
      console.log(prevState.searchName);
      console.log(this.state.searchName);
      console.log(this.state.pictures);
      try {
        const fetchedPictures = await fetchPictures();

        this.setState({ pictures: fetchedPictures.hits });
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSearch={this.handleFormSearch} />
        {this.state.loading && <Loader />}
        {this.state.error && <h1>{this.state.error} </h1>}
        {/* {this.state.pictures && ( */}
        <ImageGallery
          searchName={this.state.searchName}
          pictures={this.state.pictures}
        />
        {/* )} */}

        {/* <Modal /> */}

        {this.state.pictures && <Button />}
      </Layout>
    );
  }
}
