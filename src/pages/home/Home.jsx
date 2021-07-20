import React from 'react';
import Button from '../../components/button/Button';
import './home.scss';

//* assets
import { ReactComponent as LogoIcon } from '../../assets/svg/take-notes-icon.svg';

const Home = () => {
    return <section aria-label='Home page' className='home-page'>
        <LogoIcon role='img' aria-label='page logo' />
        <Button
            text='Sign Up'
            color='background'
        />
        <Button
            text='Log In'
            color='background'
        />
    </section>;
}

export default Home;