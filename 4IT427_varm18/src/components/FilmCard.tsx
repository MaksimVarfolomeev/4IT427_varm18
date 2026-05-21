

interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

function FilmCard({
  title,
  year,
  genre,
  rating,
  watched,
  onToggleWatched,
}: FilmCardProps) {


  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div className="film-card">
      <h2>{title}</h2>
      <p>Rok: {year}</p>
      <p>Žanr: {genre}</p>
      <p>Hodnocení: {isRatingValid ? rating : "Neplatné hodnocení"}</p>

      {/* Conditional badge */}
      {watched && <span className="badge">✓ Zhlédnuto</span>}

      <button onClick={() => onToggleWatched(title)}>
        Změnit stav zhlédnutí
      </button>
    </div>
  );
}

export default FilmCard;