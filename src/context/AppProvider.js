import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/data';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser] = useState({ username: '', redirect: false });
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const newCharacters = await fetchAPI();
    setCharacters(newCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        user,
        setUser,
        characters,
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
