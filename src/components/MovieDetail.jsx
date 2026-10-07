import { useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import StarRating from "./StarRating";
import { PLACEHOLDER_IMAGE } from "../utils/placeholder";

function MovieDetail({
  movie,
  isFavorite,
  userRating,
  onToggleFavorite,
  onRate,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <article
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="detail__close"
          onClick={onClose}
          aria-label="Cerrar detalle"
        >
          ×
        </button>

        <img
          className="detail__image"
          src={movie.image}
          alt={`Póster de ${movie.title}`}
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />

        <div className="detail__body">
          <h2 id="detail-title" className="detail__title">
            {movie.title}
          </h2>
          <p className="detail__meta">
            {movie.genre} · {movie.year}
          </p>
          <p className="detail__rating">★ {movie.rating.toFixed(1)}</p>
          <p className="detail__description">{movie.description}</p>

          <StarRating
            value={userRating}
            title={movie.title}
            onChange={(stars) => onRate(movie.id, stars)}
          />

          <div className="detail__actions">
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={() => onToggleFavorite(movie.id)}
              showLabel
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default MovieDetail;