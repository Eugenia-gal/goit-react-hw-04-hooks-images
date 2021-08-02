import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';
import s from './SearchBar.module.scss';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('Enter your query please', {
        position: 'top-right',
        duration: 2000,
      });
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handleSubmit}>
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
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
