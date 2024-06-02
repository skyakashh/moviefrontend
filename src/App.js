import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
