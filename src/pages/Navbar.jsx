import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="">
    <div className="nav-right">
      <Link className="nav signup" to="/">Home</Link>
      <Link className="nav login" to="/reservations">Reservations</Link>
      <Link className="nav login" to="/logout">Logout</Link>
    </div>
  </nav>
);

export default Navbar;
