import { useState } from "react";
import "./App.css";
import { movies } from "./data/movies";
import { filterMovies } from "./utils/filterMovies";
import { getGenres, getYears } from "./utils/getFilterOptions";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import NoResults from "./components/NoResults";

const INITIAL_FILTERS = {
  genre: "all",
  year: "all",
  minRating: 0,
  onlyFavorites: false,
};

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearSearchAndFilters = () => {
    setQuery("");
    setFilters(INITIAL_FILTERS);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const rateMovie = (id, stars) => {
    setRatings((prev) => ({
      ...prev,
      [id]: prev[id] === stars ? 0 : stars,
    }));
  };

  const handleCloseDetail = () => setSelectedId(null);

  const visibleMovies = filterMovies(movies, query, filters, favorites);
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />
      <Favorites
        movies={favoriteMovies}
        onSelect={setSelectedId}
        onToggleFavorite={toggleFavorite}
      />
      <Filters
        filters={filters}
        genres={getGenres(movies)}
        years={getYears(movies)}
        onFilterChange={handleFilterChange}
      />

      {visibleMovies.length > 0 ? (
        <MovieList
          movies={visibleMovies}
          favorites={favorites}
          ratings={ratings}
          onSelect={setSelectedId}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
        />
      ) : (
        <NoResults
          onlyFavorites={filters.onlyFavorites}
          hasFavorites={favorites.length > 0}
          onClear={clearSearchAndFilters}
        />
      )}

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] ?? 0}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App;