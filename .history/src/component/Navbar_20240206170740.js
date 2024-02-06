import {React} from 'react';
import { Link, NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout =() =>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname==="/about"? "active": ""}` } to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname==="/about"? "active": ""}` } to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex">
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
          </form>: <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
