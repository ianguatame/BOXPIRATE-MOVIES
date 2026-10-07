import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <h1 className="header__title" style={{ color: "red" }}>🎇 BOXPIRATE 🎇</h1>
      <SearchBar query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;