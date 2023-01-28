import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddNewBook() {
  const [cue, setCue] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const manageInfo = (e) => {
    const input = e.target.value;

    switch (e.target.id) {
      case 'title':
        setCue((inputs) => ({ ...inputs, title: input }));
        break;
      case 'author':
        setCue((inputs) => ({ ...inputs, author: input }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: cue.title,
      author: cue.author,
      category: 'none',
    };
    dispatch(addBook(newBook));
  };
  return (
    <div className="add-new-book">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" onChange={manageInfo} placeholder="Book Title" value={cue.title} />
        <input id="author" onChange={manageInfo} placeholder="Book Author" value={cue.author} />
        <button onClick={handleSubmit} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddNewBook;
