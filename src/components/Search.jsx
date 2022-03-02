import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
    type: 'all'
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchFilms(this.state.search, this.state.type)
    }
  }


  render() {
    return (
      <div>
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={e => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
          />
          <button className="btn search-btn"
                  onClick={() => this.props.searchFilms(this.state.search, this.state.type)}>Search
          </button>

        </div>
        <div>
          <label>
            <input
              name="group1"
              type="radio"
              value="all"
              onChange={e => this.setState({type: e.target.value})}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              value="movie"
              onChange={e => this.setState({type: e.target.value})}
              checked={this.state.type === 'movie'}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              value="series"
              onChange={e => this.setState({type: e.target.value})}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>

    )
  }
}

export default Search
