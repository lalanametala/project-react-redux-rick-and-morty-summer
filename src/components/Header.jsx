import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <h1 className="title">
      Olá,
      {' '}
      { username }
    </h1>
  );
};

export default Header;
