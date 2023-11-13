import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchPhoto } from './api';
import { SearchBar } from './SearchBar/SearchBar';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    } else {
      const getImages = async () => {
        try {
          setLoading(true);
          const search = await fetchPhoto(query, page);
          setImages(prevState =>
            page === 1 ? search.hits : [...prevState, ...search.hits]
          );
          setLoading(false);
          setLoadMore(page < Math.ceil(search.totalHits / 12));
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      getImages();
    }
  }, [query, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />

      {images.length > 0 && <Gallery items={images} />}
      {error && toast.error('This is an error!')}
      {loading && <Loader />}
      {loadMore && <Button onClick={handleLoadMore}></Button>}
      <Toaster position="top-right" />
    </div>
  );
};
