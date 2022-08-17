import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser] = useState({
    username: '',
    redirect: false,
  });
  const [characters, setCharacters] = useState([]);

  return (
    <AppContext.Provider
      value={ {
        user,
        setUser,
        characters,
        setCharacters,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
