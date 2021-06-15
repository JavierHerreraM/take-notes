import React, { useState } from 'react';
import './header.scss';

//* assets
import { ReactComponent as LogoIcon } from '../../assets/svg/take-notes-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    //* states
    let [navigationState, setNavigationState] = useState(false);

    // * opens and closes the navigation menu
    const handleMenuClick = () => setNavigationState(!navigationState);

    return <header className='page-header'>
        <div className='header'>
            <LogoIcon className='ayuda' />
            <h1>Sample Title</h1>
            <button type='button' onClick={handleMenuClick}><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <nav className={`main-navigation ${navigationState ? 'open' : 'close'}`} >
            <ul>
                <li onClick={handleMenuClick}>Home</li>
                <li onClick={handleMenuClick}>Profile</li>
                <li onClick={handleMenuClick}>Create new list</li>
                <li onClick={handleMenuClick}>Create new note</li>
                <li onClick={handleMenuClick}>Create new task</li>
                <li onClick={handleMenuClick}>Log out</li>
            </ul>
        </nav>
    </header>
};

export default Header;