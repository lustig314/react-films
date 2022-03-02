import React from 'react';
import FilmsList from '../components/FilmsList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {



  state = {
    films: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(response => response.json())
      .then(data => this.setState({films: data.Search, loading: false})
      )
      .catch((err) => {
        console.error(err);
        this.setState({loading: false})
      })

  }


  searchFilms = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({films: data.Search, loading: false})
      )
      .catch((err) => {
        console.error(err);
        this.setState({loading: false})
      })
  }

  render() {

    const {films, loading} = this.state;

    return (
      <main className="container content">

        <Search searchFilms={this.searchFilms}/>
        {
          loading ? <Preloader/> : <FilmsList films={films}/>
        }
      </main>
    )
  }
}

export default Main;
