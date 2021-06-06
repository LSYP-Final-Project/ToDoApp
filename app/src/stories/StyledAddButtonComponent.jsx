import React from 'react'
import PropTypes from 'prop-types';
import StyledAddButton from './StyledAddButton.style';

function StyledAddButtonComponent({primary, backgroundColor, size, ...props}) {
    const mode = primary ? 'storybook-styled-add-btn--primary' : 'storybook-styled-add-btn--secondary';
    return (
        <div>
            <StyledAddButton 
                style={backgroundColor && {backgroundColor}}
                {...props}    
            >
                <div 
                    className="plusSignWrapper"
                    style={backgroundColor && {backgroundColor}}
                >
                    <div className={['plusSign',`storybook-styled-add-btn--${size}`, mode].join(' ')}></div> 
                </div>
                
                <p
                className={[`storybook-styled-add-btn--${size}`, mode].join(' ')}
                >
                    Add Sprint
                </p>
            </StyledAddButton>
        </div>
    )
}

StyledAddButtonComponent.propTypes = {
    primary: PropTypes.bool,

    backgroundColor: PropTypes.string,
}

StyledAddButtonComponent.defaultProps = {
    backgroundColor: 'blue',
    primary: false,
}


export default StyledAddButtonComponent
