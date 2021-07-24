import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => {
    const { children, type = 'button', name, text, large = false, color = false, action = false } = props;

    return <button type={type} name={name}
        className={`button ${large ? 'large' : undefined} ${color ? color : undefined}`}
        onClick={action ? action : undefined} >
        {text}
        {children}
    </button>
}

// * Props of the button
// * color can take the following values: success = green color / warning = red color / secondary = secondary color
// * Large = true : the button will resize to take full width
// * Action takes a function that will be called onClick
Button.protoTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.PropTypes.arrayOf(PropTypes.element)
    ]),
    type: PropTypes.string,
    name: PropTypes.text,
    text: PropTypes.string.isRequired,
    large: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.bool,
}

export default Button;