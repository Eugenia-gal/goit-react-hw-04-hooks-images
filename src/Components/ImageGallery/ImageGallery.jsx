import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'Components/ImageGalleryItem';
import Button from 'Components/Button';
import fetchImages from 'Services/getImages';
import s from './ImageGallery.module.scss';
import toast from 'react-hot-toast';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImageGallery({ query, onSelect }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setimages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  const getImages = async (query, page) => {
    setStatus(STATUS.PENDING);
    try {
      const images = await fetchImages(query, page);
      if (images.length === 0) {
        setStatus(STATUS.IDLE);
        setCurrentPage(1);
        return toast.error(
          'Search result is not successful. Enter the correct query and try again, please.',
        );
      }
      setimages(prevState => [...prevState, ...images]);
      setStatus(STATUS.RESOLVED);
    } catch (error) {
      setError(error.message);
      setStatus(STATUS.REJECTED);
      toast.error(
        'Oops! Something went wrong... Please try again. If the problem persists, contact our customer support',
      );
    }
  };

  useEffect(() => {
    if (query !== '') {
      setCurrentPage(1);
      setimages([]);
      setError(null);
      getImages(query, 1);
    }
  }, [query]);

  useEffect(() => {
    if (query !== '' && currentPage !== 1) {
      async function Pagination() {
        setError(null);
        await getImages(query, currentPage);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
      Pagination();
    }
  }, [currentPage, query]);

  return (
    <>
      {status === STATUS.REJECTED && <h1>Error: {error}</h1>}
      <ul className={s.ImageGallery}>
        {images.length > 0 &&
          images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              tags={image.tags}
              largeImage={image.largeImageURL}
              onClick={onSelect}
            />
          ))}
      </ul>

      {status === STATUS.PENDING && (
        <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
      )}
      {status === STATUS.RESOLVED && images.length > 0 && (
        <Button
          onClick={() => {
            setCurrentPage(prevState => prevState + 1);
          }}
        />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ImageGallery;
