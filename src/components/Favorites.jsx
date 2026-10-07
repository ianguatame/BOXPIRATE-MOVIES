import { PLACEHOLDER_IMAGE } from "../utils/placeholder";

function Favorites({ movies, onSelect, onToggleFavorite }) {
  return (
    <section className="favorites" aria-label="Mis favoritas">
      <h2 className="favorites__title">Mis favoritas ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="favorites__empty">
          Aún no tienes favoritas.
        </p>
      ) : (
        <ul className="favorites__list">
          {movies.map((movie) => (
            <li key={movie.id} className="favorites__item">
              <button
                className="favorites__open"
                onClick={() => onSelect(movie.id)}
              >
                <img
                  className="favorites__image"
                  src={movie.image}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMAGE;
                  }}
                />
                <span>{movie.title}</span>
              </button>
              <button
                className="favorites__remove"
                onClick={() => onToggleFavorite(movie.id)}
                aria-label={`Quitar ${movie.title} de favoritas`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favorites;