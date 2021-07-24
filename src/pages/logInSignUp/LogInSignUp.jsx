import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';
import './logInSignUp.scss';

const LogInSignUp = () => {
    // * Location is used for defining which parts to show depending on the url
    const location = useLocation().pathname.replace('/', '').split('-').join(' ');
    const signUp = location === 'sign up' ? true : false;

    // * States
    let [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleInfoChange = (event) => {
        const { name, value } = event.target;
        setInfo(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(info);
    }

    return <section aria-label={location} className='sign-up-log-in'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            {signUp && <>
                <label htmlFor='firstName' >First name</label>
                <input id='firstName' name='firstName' type="text" placeholder='First name' value={info.firstName} onChange={handleInfoChange} />
            </>}

            {signUp && <>
                <label htmlFor='lastName' >Last name</label>
                <input id='lastName' name='lastName' type="text" placeholder='Last name' value={info.lastName} onChange={handleInfoChange} />
            </>}

            <label htmlFor='username' >Username</label>
            <input id='username' name='username' type="text" placeholder='Username' value={info.username} onChange={handleInfoChange} />

            <label htmlFor='password' >Password</label>
            <input id='password' name='password' type="text" placeholder='Password' value={info.password} onChange={handleInfoChange} />

            {signUp && <>
                <label htmlFor='confirmPassword' >Confirm password</label>
                <input id='confirmPassword' name='confirmPassword' type="text" placeholder='Confirm password' value={info.confirmPassword} onChange={handleInfoChange} />
            </>}

            <Button type='submit' text={signUp ? 'Confirm' : 'Enter'} large={true} />
        </form>
    </section>;
}

export default LogInSignUp;
