import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout.styled';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Component } from 'react';
import { Loader } from './Loader/Loader';
// import { fetchPictures } from 'api';
import axios from 'axios';
// import axios from 'axios';

export const ERROR_MSG = 'Something went wrong, please try again';

export class App extends Component {
  state = {
    searchName: '',
    pictures: null,
    loading: false,
    error: null,
    page: 1,
  };

  handleFormSearch = searchName => {
    console.log(searchName);
    this.setState({ searchName, page: 1 });
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

      this.setState({ loading: true });

      try {
        const fetchedPictures = await axios.get(
          `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=34416785-706900f4c4344fdefb158122c&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(fetchedPictures);

        this.setState({ pictures: fetchedPictures.data.hits });
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });

      try {
        const fetchedPictures = await axios.get(
          `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=34416785-706900f4c4344fdefb158122c&image_type=photo&orientation=horizontal&per_page=12`
        );

        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...fetchedPictures.data.hits],
          };
        });
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = e => {
    const { page } = this.state;

    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
    console.log(page);
  };

  render() {
    const { loading, error, pictures, searchName } = this.state;
    return (
      <Layout>
        <Searchbar onSearch={this.handleFormSearch} />
        {loading && <Loader />}
        {error && <h1>{this.state.error} </h1>}
        {pictures && (
          <ImageGallery searchName={searchName} pictures={pictures} />
        )}

        {pictures && pictures.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </Layout>
    );
  }
}
