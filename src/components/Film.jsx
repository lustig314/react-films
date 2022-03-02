import React from 'react';

const Film = ({Title: title, Year: year, imdbID: id, Type: type, Poster: poster}) => {
  return (

    <div className="card" id={id}>
      <div className="card-image">
        {
          poster === 'N/A' ?
            <img src={`https://via.placeholder.com/300x400?text=Visit+Blogging.com+Now
C/O https://placeholder.com/`} alt="poster"/>
            :
            <img src={poster} alt="poster"/>
        }
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
  );
};

export default Film;
