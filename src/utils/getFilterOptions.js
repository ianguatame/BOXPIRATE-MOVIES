export function getGenres(movies) {
  return [...new Set(movies.map((movie) => movie.genre))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function getYears(movies) {
  return [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a);
}