/*
 *
 *
 */
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle as net,
  faCommentAlt as comment,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
// import { faASDF } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const brand = (
    <div className='fa-layers fa-fw'>
      <FontAwesomeIcon icon={comment} transform='grow-5 left-1' />
      <FontAwesomeIcon icon={net} transform='shrink-2 left-1 up-2' inverse />
    </div>
  );
  const navTogglerBars = <FontAwesomeIcon icon={faBars} />;

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light shadow'>
      <div className='container user-select-none'>
        <a className='navbar-brand fst-title' href='/'>
          {brand} React Template
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navigBar'>
          {navTogglerBars}
        </button>

        <div className='collapse navbar-collapse' id='navigBar'>
          <div className='navbar-nav'>
            <NavLink
              className='nav-item nav-link hover-secondary rounded'
              exact
              to='/'
              activeClassName='active text-decoration-underline'>
              Home
            </NavLink>
            <NavLink
              className='nav-item nav-link hover-secondary rounded'
              to='/spetz'
              activeClassName='active text-decoration-underline'>
              Pastebin
            </NavLink>
            <NavLink
              className='nav-item nav-link hover-secondary rounded'
              to='/yard'
              activeClassName='active text-decoration-underline'>
              Imagedump
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
