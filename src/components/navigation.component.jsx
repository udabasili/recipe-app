import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as AppLogo} from '../assets/image/icons8-cooking-book-100.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import HomeImage from "../assets/image/homepage.jpg";

export default function Navigation() {
    return (
      <nav className="navigation">
        <div className="navigation__logo-box">
          <AppLogo className="icon" />
        </div>
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to={{
                pathname: "/",
                query: {
                  src: HomeImage,
                },
              }}
              className="navigation__link"
            >
              <FontAwesomeIcon icon={faHome} size="1x" />
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/search" className="navigation__link">
              <FontAwesomeIcon icon={faSearch} size="1x" />
              Search
            </Link>
          </li>
        </ul>
      </nav>
    );
}
