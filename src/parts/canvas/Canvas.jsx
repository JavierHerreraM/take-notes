import React from 'react';
import PropTypes from 'prop-types';
import './canvas.scss';

const Canvas = (props) => {
    const { children } = props;
    return <main className='canvas'>
        {children}
    </main>;
};

// * the pages that are pass to the canvas
Canvas.propTypes = { children: PropTypes.element }

export default Canvas;