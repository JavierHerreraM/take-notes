import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import './header.scss';

//* assets
import { ReactComponent as LogoIconSmall } from '../../assets/svg/take-notes-icon.svg';
import { ReactComponent as LogoIconBig } from '../../assets/svg/take-notes-icon2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const isTabletOrBigger = useMediaQuery({ minWidth: 769 });

    let location = useLocation().pathname;
    // * First, divides the path by the / and grabs the second value of the array, then, if it has words separated by -
    // * it is divided again and join to use it as the title, and the first character is make uppercase
    location = location.split('/')[1].split('-').join(' ');
    location = location.charAt(0).toUpperCase() + location.slice(1);

    //* states
    let [navigationState, setNavigationState] = useState(false);

    // * opens and closes the navigation menu
    const handleMenuClick = () => setNavigationState(!navigationState);

    return <header className='page-header'>
        <div className='header'>
            {isTabletOrBigger ? <LogoIconBig /> : <LogoIconSmall />}
            <h1>{location}</h1>
            <button type='button' onClick={handleMenuClick}><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <nav className={`main-navigation ${navigationState ? 'open' : 'close'}`} >
            <ul>
                <li><Link to='/' onClick={handleMenuClick}>Home</Link></li>
                <li><Link to='#' onClick={handleMenuClick}>Profile</Link></li>
                <li><Link to='#' onClick={handleMenuClick}>Create new list</Link></li>
                <li><Link to='#' onClick={handleMenuClick}>Create new note</Link></li>
                <li><Link to='#' onClick={handleMenuClick}>Create new task</Link></li>
                <li><Link to='#' onClick={handleMenuClick}>Log out</Link></li>
            </ul>
        </nav>
    </header>
};

export default Header;