import React from 'react';
import Button from '../../components/button/Button';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import './home.scss';

//* assets
import { ReactComponent as LogoIconSmall } from '../../assets/svg/take-notes-icon.svg';
import { ReactComponent as LogoIconBig } from '../../assets/svg/take-notes-icon2.svg';

const Home = () => {

    // * isTabletOrBigger is used to change the logo on mid to big screens
    const isTabletOrBigger = useMediaQuery({ query: '(min-width: 769px)' });
    // * history is used to redirect the user when a button is clicked
    let history = useHistory();

    // * This redirects the user to a new page depending on which button was pressed
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
                color='background'
                action={handleClick}
                name='signUp'
            >Sign up</Button>
            <Button
                color='background'
                action={handleClick}
                name='logIn'
            >Log in</Button>
        </div>
    </section>;
}

export default Home;