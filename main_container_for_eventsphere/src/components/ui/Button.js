import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with various styles
 * @param {Object} props - Component props
 * @returns {React.Component} - Button component
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  type = 'button',
  disabled = false,
  icon = null,
  className = '',
  ...rest 
}) => {
  const baseClass = 'btn';
  
  const classes = [
    baseClass,
    variant ? `btn-${variant}` : '',
    size ? `btn-${size}` : '',
    fullWidth ? 'btn-full-width' : '',
    disabled ? 'btn-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string
};

export default Button;
