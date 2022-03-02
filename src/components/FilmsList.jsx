import React from 'react';
import Film from './Film'

const FilmsList = ({films = []}) => {
  return (
    <div className='films'>
      {films.length ? films.map(film => <Film key={film.imdbID} {...film}/>) : <h4>Ничего не найдено</h4>}
    </div>
  );
};

export default FilmsList;
