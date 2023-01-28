import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
    };
    setTitle('');
    setAuthor('');
    dispatch(addBook(book));
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input className="data-input" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="data-input" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddNewBook;
