const normalize = (text) =>
  text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function filterMovies(movies, query, filters, favorites) {
  const search = normalize(query.trim());

  return movies.filter((movie) => {
    const matchesQuery = normalize(movie.title).includes(search);
    const matchesGenre =
      filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear =
      filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite =
      !filters.onlyFavorites || favorites.includes(movie.id);

    return (
      matchesQuery &&
      matchesGenre &&
      matchesYear &&
      matchesRating &&
      matchesFavorite
    );
  });
}