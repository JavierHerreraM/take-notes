import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

//* Tests for user interaction
describe('Page header and main navigation', () => {
    beforeEach(() => {
        render(<Header />);

        //* set the screen size to small screen
        window.innerWidth = 500;
        window.dispatchEvent(new Event('resize'));
    });

    it('should show the header on the screen', () => {
        expect(screen.getByRole('banner')).toBeVisible();
    });

    it('should toggle the navigation when the user clicks the menu button', () => {
        const button = screen.getByRole('button');

        userEvent.click(button);
        expect(screen.getByRole('navigation')).toHaveClass('open');

        userEvent.click(button);
        expect(screen.getByRole('navigation')).toHaveClass('close');
    });

    it('should close the navigation if one option is clicked', () => {
        const button = screen.getByRole('button');
        const menuOption = screen.getByText('Home');

        userEvent.click(button);
        userEvent.click(menuOption);
        expect(screen.getByRole('navigation')).toHaveClass('close');
    });

    it('should always show the navigation on big screen sizes', () => {
        //* changes the screen size to 1300px
        window.innerWidth = 1300;
        window.dispatchEvent(new Event('resize'));

        expect(window.innerWidth).toEqual(1300);
        expect(screen.getByRole('navigation')).toBeVisible();
    });    

});