import React, { useEffect, useState } from 'react';
import { getAllMovies, markAsWatched, deleteMovie, deleteAllMovies } from '../services/movieService';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await getAllMovies();
    setMovies(data);
  };

  const handleMarkAsWatched = async (id) => {
    await markAsWatched(id);
    loadMovies();
  };

  const handleDeleteMovie = async (id) => {
    await deleteMovie(id);
    loadMovies();
  };

  const handleDeleteAll = async () => {
    await deleteAllMovies();
    loadMovies();
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Link to="/add">Add Movie</Link>
      <button onClick={handleDeleteAll}>Delete All</button>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.movie} {movie.watched ? " (Watched)" : ""}
            <button onClick={() => handleMarkAsWatched(movie._id)}>Mark as Watched</button>
            <button onClick={() => handleDeleteMovie(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
