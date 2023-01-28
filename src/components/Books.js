import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddNewBook from './Forms';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <BookList books={books} />
      <AddNewBook />
    </>
  );
};

export default Books;
