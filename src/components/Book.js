import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-list">
      <div>
        <span className="category">Category</span>
        <h2>{title}</h2>
        <span className="author">{author}</span>
        <div className="btn">
          <button type="submit">Comments</button>
          <button onClick={handleSubmit} type="submit">Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="reading-preview">
        <div className="pre">
          <div className="progress" />
          <div className="reading-desc">
            <div className="oval" />
            <div className="p-container">
              <span className="percent-complete">78%</span>
              <span className="com">Completed</span>
            </div>
          </div>
        </div>
        <div className="chapter-progress">
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 12</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
