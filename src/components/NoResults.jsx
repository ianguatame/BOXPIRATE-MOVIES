function NoResults({ onlyFavorites, hasFavorites, onClear }) {
  const message =
    onlyFavorites && !hasFavorites
      ? "Aún no has marcado ninguna película como favorita."
      : "No encontramos películas que coincidan con tu búsqueda y filtros.";

  return (
    <section className="no-results" role="status">
      <p className="no-results__title">Sin resultados</p>
      <p className="no-results__text">{message}</p>
      <button className="no-results__button" onClick={onClear}>
        Limpiar búsqueda y filtros
      </button>
    </section>
  );
}

export default NoResults;