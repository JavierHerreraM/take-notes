import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { StaticRouter } from 'react-router';
import Canvas from './Canvas';

it('should show the canvas on screen', () => {
    render(<StaticRouter><Canvas /></StaticRouter>);
    expect(screen.getByRole('main')).toBeVisible();
});