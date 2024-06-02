import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMovie } from '../services/movieService';

const AddMovie = () => {
  const [movie, setMovie] = useState({ movie: '', watched: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMovie(movie.movie,movie.watched);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie:</label>
          <input type="text" name="movie" value={movie.movie} onChange={handleChange} required />
        </div>
        <div>
          <label>Watched:</label>
          <input type="checkbox" name="watched" checked={movie.watched} onChange={() => setMovie({ ...movie, watched: !movie.watched })} />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
