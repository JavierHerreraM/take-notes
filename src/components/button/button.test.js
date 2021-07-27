import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

let button = null;
const TEXT = 'Click me!';

describe('----- Button component -----', () => {
    beforeEach(() => {
        render(<Button>{TEXT}<a>link</a></Button>);
        button = screen.getByRole('button');
    });

    it('should show some text inside the button', () => {
        expect(button).toHaveTextContent(TEXT);
    });

    it('should show a link with the text: link', () => {
        expect(button).toContainElement(screen.getByText('link'));
    });

});