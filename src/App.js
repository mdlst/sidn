import React from 'react';

import ListOfFilms from './components/ListOfFilms';
import CharactersFromFilm from './components/CharactersFromFilm'

import {GlobalStyle} from './GlobalStyle';

function App() {
  const query = new  window.URLSearchParams(window.location.search)
  const filmId = query.get('film')

  return (
    <>
      {
        filmId ? <CharactersFromFilm id={filmId} /> : <ListOfFilms />
      }
      <GlobalStyle />
    </>
  );
}

export default App;
