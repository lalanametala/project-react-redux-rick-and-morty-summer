import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, label, onChange, value, className }) {
  return (
    <label htmlFor={ name }>
      { label }
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        className={ className }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  className: '',
};

export default Input;
