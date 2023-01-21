import React from 'react';
import Book from './Book';
import AddNewBook from './Forms';

function Books() {
  return (
    <>
      <div className="books-shelf">
        <Book title="My Book" author="Tonny" />
      </div>
      <AddNewBook />
    </>
  );
}

export default Books;
