import React, { Component } from 'react';
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

export class ImageGallery extends Component {
  state = {
    currentPage: 1,
    images: [],
    status: STATUS.IDLE,
    error: null,
  };

  static propTypes = {
    query: PropTypes.string,
    onSelect: PropTypes.func,
  };

  async componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevProps.query;
    const newQuery = this.props.query;
    const oldPage = prevState.currentPage;
    const newPage = this.state.currentPage;

    if (oldQuery !== newQuery) {
      this.setState({ currentPage: 1, images: [], error: null });
      this.getImages(newQuery, newPage);
    }

    if (oldQuery === newQuery && oldPage !== newPage && newPage !== 1) {
      this.setState({ error: null });
      await this.getImages(newQuery, newPage);

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getImages = async (query, page) => {
    this.setState({ status: STATUS.PENDING });
    try {
      const images = await fetchImages(query, page);
      if (images.length === 0) {
        this.setState({ status: STATUS.IDLE });
        return toast.error(
          'Search result is not successful. Enter the correct query and try again, please.',
          {
            position: 'top-right',
            duration: 3000,
          },
        );
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        status: STATUS.RESOLVED,
      }));
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
      toast.error(
        'Oops! Something went wrong... Please try again. If the problem persists, contact our customer support',
        {
          position: 'top-right',
          duration: 3000,
        },
      );
    }
  };

  changeCurrentPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, status, error } = this.state;
    const { onSelect } = this.props;

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
          <Button onClick={this.changeCurrentPage} />
        )}
      </>
    );
  }
}

export default ImageGallery;
