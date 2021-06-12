import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Canvas from './Canvas';

it('should show the canvas on screen', () => {
    render(<Canvas />);
    expect(screen.getByRole('main')).toBeVisible();
});