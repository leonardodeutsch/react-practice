import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.jsx';

const API_URL = 'http://www.omdbapi.com?apikey=43ff0ff4';
import SearchIcon from './search.svg';

const MovieLand = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = (title) => {
    axios.get(`${API_URL}&s=${title}`)
    .then(res => {
      setMovies(res.data.Search);
    })
  }

  useEffect(() => {
    searchMovies('');
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  }

  return (
    <div className="MovieLand">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies && <div className="container">
        {movies.map((movie) => (
          <MovieCard movie1={movie}/>
        ))}
      </div>}
    </div>
  );
}
 
export default MovieLand;