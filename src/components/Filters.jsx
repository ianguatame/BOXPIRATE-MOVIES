function Filters({ filters, genres, years, onFilterChange }) {
  return (
    <section className="filters" aria-label="Filtros">
      <label className="filters__field">
        Género
        <select
          value={filters.genre}
          onChange={(e) => onFilterChange("genre", e.target.value)}
        >
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>

      <label className="filters__field">
        Año
        <select
          value={filters.year}
          onChange={(e) => onFilterChange("year", e.target.value)}
        >
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label className="filters__field">
        Calificación
        <select
          value={filters.minRating}
          onChange={(e) => onFilterChange("minRating", Number(e.target.value))}
        >
          <option value={0}>Cualquiera</option>
          <option value={7}>7 o más</option>
          <option value={8}>8 o más</option>
          <option value={9}>9 o más</option>
        </select>
      </label>

      <label className="filters__check">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => onFilterChange("onlyFavorites", e.target.checked)}
        />
        Solo favoritas
      </label>
    </section>
  );
}

export default Filters;