import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ text, icon, link }) => {
  return (
    <a href={link} className="custom-button">
      {text}
      {icon && <i className="icon"><img src={icon} alt="icon" /></i>}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
