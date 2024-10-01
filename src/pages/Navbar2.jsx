import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="">
    <div className="nav-left">
      <Link to="/">
        <span className="logo">0nlineCourses</span>
      </Link>
    </div>
  </nav>
);

export default Nav;
