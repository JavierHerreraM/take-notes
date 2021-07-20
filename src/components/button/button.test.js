import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

let button = null;
const TEXT = 'Click me!';

describe('Button component', () => {
    beforeEach(() => {
        render(<Button text={TEXT} icon={true} />);
        button = screen.getByRole('button');
    });

    it('should show some text', () => {
        expect(button).toHaveTextContent(TEXT);
    });

    it('should show an icon inside the button', () => {
        expect(button).toContainElement(screen.getByRole('img'));
        expect(screen.getByRole('img')).toBeVisible();
    });

});