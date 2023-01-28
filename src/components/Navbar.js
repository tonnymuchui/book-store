import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="nav-bar">
      <h2>Bookstore CMS</h2>
      <div className="nav-links">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  );
}

export default Header;
