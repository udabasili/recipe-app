import React from 'react'
import { NavLink } from 'react-router-dom';
import {ReactComponent as AppLogo} from '../assets/image/icons8-cooking-book-100.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <div className="navigation__logo-box">
                <AppLogo className="icon"/>
            </div>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="" className="navigation__link">
                        <FontAwesomeIcon icon={faHome} size="1x"/>
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/search" className="navigation__link">
                        <FontAwesomeIcon icon={faSearch} size="1x" />
                        Search
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
