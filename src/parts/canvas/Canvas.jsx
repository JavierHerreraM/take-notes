import React from 'react';
import PropTypes from 'prop-types';
import './canvas.scss';

const Canvas = (props) => {
    const { children } = props;
    return <main className='canvas'>
        {children}
    </main>;
};

//Provides a canvas for the pages to display
Canvas.propTypes = { children: PropTypes.element }

export default Canvas;