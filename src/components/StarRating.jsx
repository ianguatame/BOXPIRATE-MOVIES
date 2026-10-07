function StarRating({ value = 0, onChange, title }) {
  return (
    <div
      className="star-rating"
      role="group"
      aria-label={`Tu valoración de ${title}`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-rating__star ${
            star <= value ? "star-rating__star--filled" : ""
          }`}
          onClick={() => onChange(star)}
          aria-pressed={star <= value}
          aria-label={`${star} ${star === 1 ? "estrella" : "estrellas"}`}
        >
          ★
        </button>
      ))}
      <span className="star-rating__text">
        {value > 0 ? `Tu valoración: ${value}/5` : "Sin valorar"}
      </span>
    </div>
  );
}

export default StarRating;