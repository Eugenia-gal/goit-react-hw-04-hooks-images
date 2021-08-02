import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ src, tags, largeImage, onClick }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={tags}
        className={s.ImageGalleryItem_image}
        onClick={() => {
          onClick({ largeImage, tags });
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  tags: PropTypes.string,
  largeImage: PropTypes.string,
  onClose: PropTypes.func,
};

export default ImageGalleryItem;
