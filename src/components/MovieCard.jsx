import FavoriteButton from "./FavoriteButton";
import StarRating from "./StarRating";
import { PLACEHOLDER_IMAGE } from "../utils/placeholder";

function MovieCard({
  movie,
  isFavorite,
  userRating,
  onSelect,
  onToggleFavorite,
  onRate,
}) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__image"
        src={movie.image}
        alt={`Póster de ${movie.title}`}
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER_IMAGE;
        }}
      />
      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          {movie.genre} · {movie.year}
        </p>
        <p className="movie-card__rating">★ {movie.rating.toFixed(1)}</p>
        <p className="movie-card__description">{movie.description}</p>

        <StarRating
          value={userRating}
          title={movie.title}
          onChange={(stars) => onRate(movie.id, stars)}
        />

        <div className="movie-card__actions">
          <button
            className="movie-card__button"
            onClick={() => onSelect(movie.id)}
          >
            Ver detalle
          </button>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(movie.id)}
          />
        </div>
      </div>
    </article>
  );
}

export default MovieCard;