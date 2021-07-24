import React from 'react';
import Button from '../../components/button/Button';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import './home.scss';

//* assets
import { ReactComponent as LogoIconSmall } from '../../assets/svg/take-notes-icon.svg';
import { ReactComponent as LogoIconBig } from '../../assets/svg/take-notes-icon2.svg';

const Home = () => {

    const isTabletOrBigger = useMediaQuery({ query: '(min-width: 769px)' });
    let history = useHistory();

    const handleClick = (event) => {
        const { name } = event.target;
        if (name === 'signUp') {
            history.push("/sign-up");
        } else {
            history.push("/log-in");
        }
    }

    return <section aria-label='Home page' className='home-page'>
        {isTabletOrBigger ?
            <LogoIconBig role='img' aria-label='page logo' /> :
            <LogoIconSmall role='img' aria-label='page logo' />}

        <div>
            <Button
                text='Sign Up'
                color='background'
                action={handleClick}
                name='signUp'
            />
            <Button
                text='Log In'
                color='background'
                action={handleClick}
                name='logIn'
            ></Button>
        </div>
    </section>;
}

export default Home;