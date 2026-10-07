import MovieCard from "./MovieCard";

function MovieList({
  movies,
  favorites,
  ratings,
  onSelect,
  onToggleFavorite,
  onRate,
}) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] ?? 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          onRate={onRate}
        />
      ))}
    </section>
  );
}

export default MovieList;