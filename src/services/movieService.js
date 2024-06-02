import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your Go backend URL

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
};

export const createMovie = async (movie,watched) => {
  try {
    const response = await axios.post(`http://localhost:4000/create`, {
        "movie" : movie,
        "watched": watched
    });
    return response.data;
  } catch (error) {
    console.error("Error creating/updating movie", error);
    throw error;
  }
};

export const markAsWatched = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/watched/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error updating movie", error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting movie", error);
    throw error;
  }
};

export const deleteAllMovies = async () => {
  try {
    const response = await axios.delete(`${API_URL}/deleteall`);
    return response.data;
  } catch (error) {
    console.error("Error deleting all movies", error);
    throw error;
  }
};
