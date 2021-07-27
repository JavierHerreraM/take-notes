import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import './canvas.scss';

// * This component is a canvas where the pages go inside
const Canvas = (props) => {
    const { children } = props;
    // ! I can pass this big screen implementation to the css
    const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' });

    // ! I need to think about how to do this i cases that the string i want it's not the beggining of the pathname
    let location = useLocation().pathname;
    // * First, divides the path by the / and grabs the second value of the array, then, if it has words separated by -
    // * it is divided again and join to use it as the title, and the first character is make uppercase
    location = location.split('/')[1].split('-').join(' ');
    location = location.charAt(0).toUpperCase() + location.slice(1);

    return <main className='canvas'>
        {isBigScreen && <h1>{location}</h1>}
        {children}
    </main>;
};

// * the pages that are pass to the canvas
Canvas.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.PropTypes.arrayOf(PropTypes.element)
    ]),
}

export default Canvas;