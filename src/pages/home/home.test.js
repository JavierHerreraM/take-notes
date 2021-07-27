import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StaticRouter } from 'react-router-dom';
import Home from './Home';

let homePage = null;

describe('----- Home page -----', () => {
    beforeEach(() => {
        render(<StaticRouter><Home /></StaticRouter>);
        homePage = screen.getByRole('region', { name: /home page/i });
    });
    
    it('should show the home page on screen', () => {
        expect(homePage).toBeVisible();
    });

    it('should show the page logo', () => {
        expect(homePage).toContainElement(screen.getByRole('img', { name: /page logo/i }));
        expect(screen.getByRole('img', { name: /page logo/i })).toBeVisible();
    });

    it('should show the sign up button', () => {
        expect(homePage).toContainElement(screen.getByText(/sign up/i));
        expect(screen.getByText(/sign up/i)).toBeVisible();
    });

    it('should show the log in button', () => {
        expect(homePage).toContainElement(screen.getByText(/log in/i));
        expect(screen.getByText(/log in/i)).toBeVisible();
    });
});
