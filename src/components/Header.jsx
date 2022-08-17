import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
  const { user: { username } } = useContext(AppContext);
  return (
    <h1 className="title">
      Olá,
      {' '}
      { username }
    </h1>
  );
}

export default Header;
