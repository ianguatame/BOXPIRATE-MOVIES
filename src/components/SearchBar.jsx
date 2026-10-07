function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Buscar película por título..."
      aria-label="Buscar película por título"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}

export default SearchBar;