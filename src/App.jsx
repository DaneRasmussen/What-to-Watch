import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Filter from './_filter/Filter'
import { fetchMovies } from './_api/tmdb'

function App() {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
  console.log("Fetching genres...");
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      console.log("Genres API response:", data);
      setGenres(data.genres || []);
    })
    .catch(err => console.error("Error fetching genres:", err));
  }, []);

  const getGenreNames = (ids) => {
    return ids
      .map(id => genres.find(g => g.id === id)?.name)
      .filter(Boolean);
  };

  const handleFilterSubmit = async (filters) => {
    const results = await fetchMovies(filters);
    setMovies(results);
  };

  return (
    <>
    <h1>What to Watch</h1>
    <div>
      <Filter onSubmitFilters={handleFilterSubmit} genres={genres}/>
    </div>
    <div className="movie-grid">
      {movies.length === 0 && <p>No movies yet. Set your filters and hit search to find your next movie to watch</p>}
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title} 
          />
          <h4>{movie.title}</h4>
          <p title={`Vote Count:  ${movie.vote_count}`}>Rating: {movie.vote_average}</p>
          
          <div className="movie-genres">
            <span>Genres:</span>
              {getGenreNames(movie.genre_ids).map((g, i) => (
                <span key={i} className="genre-listing">
                  {g}
                </span>
              ))}
            </div>

            <p>Release Year: {movie.release_date.slice(0,4)}</p>

        </div>
      )) }
    </div>
    <p>Made by Dane Rasmussen</p>
    </>
  )
}

export default App
