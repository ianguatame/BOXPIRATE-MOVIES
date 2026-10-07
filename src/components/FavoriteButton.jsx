function FavoriteButton({ isFavorite, onToggle, showLabel = false }) {
  const label = isFavorite ? "Quitar de favoritas" : "Agregar a favoritas";

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? "favorite-button--active" : ""}`}
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={label}
      title={label}
    >
      {isFavorite ? "♥" : "♡"}
      {showLabel && <span> {label}</span>}
    </button>
  );
}

export default FavoriteButton;