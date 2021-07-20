import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

// * Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Button = props => {
    const { text = 'default', large, color = false, icon = false, action = false } = props;

    return <button
        className={`button ${large ? 'large' : undefined} ${color ? color : undefined}`}
        onClick={action ? action : undefined} >
        {text}
        {icon && <FontAwesomeIcon aria-hidden='false' icon={faCaretDown} />}
    </button>
}

// * Props of the button
// * color can take the following values: success = green color / warning = red color / secondary = secondary color
// * Large = true : the button will resize to take full width
// * Action takes a function that will be called onClick
Button.protoTypes = {
    text: PropTypes.string.isRequired,
    large: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.bool,
    action: PropTypes.func
}

export default Button;