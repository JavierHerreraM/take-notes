import { render, screen  } from "@testing-library/react"
import '@testing-library/jest-dom';
import {StaticRouter} from 'react-router-dom';
import LogInSignUp from './LogInSignUp';

    it('should display the page on screen', () => {
        // * StaticRouter is needed so useLocation in the component doesn't throw an undefined error
        render(<StaticRouter ><LogInSignUp /></StaticRouter>);
        expect(screen.getByRole('region')).toBeVisible();
    });

    it('should show the first name, last name, username, password, and confirm password fields', () => {
        render(<StaticRouter ><LogInSignUp /></StaticRouter>);
        expect(screen.getByLabelText(/^first name/i)).toBeVisible();
        expect(screen.getByLabelText(/^last name/i)).toBeVisible();
        expect(screen.getByLabelText(/^username/i)).toBeVisible();
        expect(screen.getByLabelText(/^password/i)).toBeVisible();
        expect(screen.getByLabelText(/^confirm password/i)).toBeVisible();
    });
