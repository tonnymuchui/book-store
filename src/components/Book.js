import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { title, author, id } = props;

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-shelf">
      <ul className="book-list">
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <button className="remove-btn" onClick={() => handleClick(id)} type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;

export default Book;
