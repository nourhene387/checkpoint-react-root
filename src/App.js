// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

// Import movie data from database
import movieData from './database/data';

function App() {
  // Initialiser avec les 3 premiers films
  const [movies, setMovies] = useState(movieData.slice(0, 3));

  // Liste des films restants (qui ne sont pas encore affichés)
  const [remainingMovies, setRemainingMovies] = useState(movieData.slice(3));

  // Liste des films filtrés à afficher
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Fonction de filtre pour la recherche
  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? parseFloat(movie.rating) >= rating : true)
    );
    setFilteredMovies(filtered);
  };

  // Fonction pour ajouter un film à la liste affichée
  const handleAddMovie = () => {
    // Si la liste restante est vide, on ne fait rien
    if (remainingMovies.length === 0) {
      return;
    }

    // Prendre le premier film de la liste restante
    const newMovie = remainingMovies[0];

    // Ajouter ce film à la liste des films affichés
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, newMovie];
      setFilteredMovies(updatedMovies); // mettre à jour les films filtrés
      return updatedMovies;
    });

    // Enlever ce film de la liste des films restants
    setRemainingMovies((prevRemaining) => prevRemaining.slice(1));
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>

      {/* Filter Component */}
      <Filter onFilter={handleFilter} />

      {/* Bouton pour ajouter un film */}
      <button onClick={handleAddMovie} disabled={remainingMovies.length === 0}>
        Add Movie
      </button>

      {/* Movie List Component */}
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
      
      {/* Message si tous les films ont été ajoutés */}
      {remainingMovies.length === 0 && <p>All movies have been added.</p>}
    </div>
  );
}

export default App;