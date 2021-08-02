import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export function Modal({ onClose, src, tags }) {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const escFunction = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', escFunction);

    return function cleanup() {
      document.removeEventListener('keydown', escFunction);
    };
  });

  return (
    <div
      className={s.Overlay}
      onClick={e => {
        closeModal(e);
      }}
    >
      <div className={s.Modal}>
        <img src={src} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
