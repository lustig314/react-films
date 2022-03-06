import React, {useState, useEffect} from 'react';
import FilmsList from '../components/FilmsList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {


  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);


  const searchFilms = (str, type = 'all') => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
          setFilms(data.Search)
          setLoading(false)
      }
      )
      .catch((err) => {
        console.error(err);
        setLoading(false)
      })
  }

    useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => {
          setFilms(data.Search)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err);
          setLoading(false)
        })
    }, [])

    return (
      <main className="container content">

        <Search searchFilms={searchFilms}/>
        {
          loading ? <Preloader/> : <FilmsList films={films}/>
        }
      </main>
    )
}

export default Main;
