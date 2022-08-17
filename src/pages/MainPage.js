import React, { useContext, useEffect } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import fetchAPI from '../services/data';
import AppContext from '../context/AppContext';

function Mainpage() {
  const { setCharacters } = useContext(AppContext);

  useEffect(() => {
    async function fetchCharacters() {
      const newCharacters = await fetchAPI();
      setCharacters(newCharacters);
    }
    fetchCharacters();
  }, [setCharacters]);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}

export default Mainpage;
