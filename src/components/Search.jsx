import React, {useState} from 'react';

const Search = ({searchFilms}) => {

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchFilms(search, type)
    }
  }
    return (
      <div>
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={e => setSearch( e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="btn search-btn"
                  onClick={() => searchFilms(search, type)}>Search
          </button>

        </div>
        <div>
          <label>
            <input
              name="group1"
              type="radio"
              value="all"
              onChange={e => setType(e.target.value)}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              value="movie"
              onChange={e => setType(e.target.value)}
              checked={type === 'movie'}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              value="series"
              onChange={e => setType(e.target.value)}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>

    )

}

export default Search
