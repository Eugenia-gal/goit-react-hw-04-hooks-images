import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';
import s from './SearchBar.module.scss';

export function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter your query please');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.submit_btn} type="submit">
          <AiOutlineSearch className={s.icon} />
        </button>
        <input
          className={s.search_input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          type="text"
          name="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
