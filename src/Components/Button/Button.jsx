import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

function Button({ onClick }) {
  return (
    <>
      <button type="button" className={s.Button} onClick={onClick}>
        Load more
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
