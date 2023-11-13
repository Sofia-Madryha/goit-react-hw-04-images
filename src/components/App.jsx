import { Component } from 'react';
import { fetchPhoto } from './api';
import { SearchBar } from './SearchBar/SearchBar';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    this.setState({
      query: searchValue,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        prevState.query !== this.state.query ||
        this.state.page !== prevState.page
      ) {
        this.setState({ loading: true });
        const search = await fetchPhoto(this.state.query, this.state.page);
        this.setState({
          images:
            this.state.page === 1
              ? search.hits
              : [...prevState.images, ...search.hits],
          loading: false,
          // loadMore: this.state.page < Math.ceil(search.totalHits / 12)
        });
      }
    } catch (error) {
      // this.setState({ error: true });
    } finally {
      // this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />

        {this.state.images.length > 0 && <Gallery items={this.state.images} />}
        {this.state.loading && <Loader></Loader>}
        {/* {this.state.images.length > 0 && <div>GALLERY</div>}
        {this.state.loading && <div>Loader...</div>} */}
        {this.state.images.length > 0 && (
          <Button onClick={this.handleLoadMore}></Button>
        )}
      </div>
    );
  }
}
