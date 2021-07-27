import { render, screen  } from "@testing-library/react"
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LogInSignUp from './LogInSignUp';

const TEXT = 'Testing';

describe('----- Log in - Sign up component -----', () => {
    it('should display the page on screen', () => {
        // * Memory is needed so useLocation in the component doesn't throw an undefined error
        render(<MemoryRouter ><LogInSignUp /></MemoryRouter>);
        expect(screen.getByRole('region')).toBeVisible();
    });

    describe('----- Log in page tests -----', () => {
        let username = null, password = null;
        beforeEach(() => {
            render(<MemoryRouter initialEntries={['/log in']} initialIndex={0} ><LogInSignUp /></MemoryRouter>);
            username = screen.getByLabelText(/^username/i);
            password = screen.getByLabelText(/^password/i);
        });

        it('should only show the username and password fields in the log in page', () => {
            expect(username).toBeVisible();
            expect(password).toBeVisible();
        });

        it('should be able to write in the 2 input fields', () => {
            userEvent.type(username, TEXT);
            userEvent.type(password, TEXT);

            expect(username).toHaveValue(TEXT);
            expect(password).toHaveValue(TEXT);
        });
    });

    describe('----- Sign Up page tests -----', () => {
        let firstName = null, lastName = null, username = null, password = null, confirmPassword = null;

        beforeEach(() => {
            render(<MemoryRouter initialEntries={['/sign-up']} initialIndex={0} ><LogInSignUp /></MemoryRouter>);
            firstName = screen.getByLabelText(/^first name/i);
            lastName = screen.getByLabelText(/^last name/i);
            username = screen.getByLabelText(/^username/i);
            password = screen.getByLabelText(/^password/i);
            confirmPassword = screen.getByLabelText(/^confirm password/i);
            
        });

        it('should show the first and last name, username, password, and confirm password fields in the sign up page', () => {
            expect(firstName).toBeVisible();
            expect(lastName).toBeVisible();
            expect(username).toBeVisible();
            expect(password).toBeVisible();
            expect(confirmPassword).toBeVisible();
        });

        it('should be able to write in the 5 input fields', () => {
            render(<MemoryRouter initialEntries={['/sign-up']} initialIndex={0} ><LogInSignUp /></MemoryRouter>);
    
            userEvent.type(firstName, TEXT);
            userEvent.type(lastName, TEXT);
            userEvent.type(username, TEXT);
            userEvent.type(password, TEXT);
            userEvent.type(confirmPassword, TEXT);
    
            expect(firstName).toHaveValue(TEXT);
            expect(lastName).toHaveValue(TEXT);
            expect(username).toHaveValue(TEXT);
            expect(password).toHaveValue(TEXT);
            expect(confirmPassword).toHaveValue(TEXT);
        });
    });
});
