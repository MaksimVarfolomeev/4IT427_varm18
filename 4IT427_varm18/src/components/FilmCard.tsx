import styles from './FilmCard.module.css';

interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (id: string) => void;
  onRemove: (id: string) => void;
}

function FilmCard({ id, title, year, genre, rating, watched, onToggleWatched, onRemove }: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <div className={`${styles.card} ${watched ? styles.cardWatched : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.meta}>
        <span className={styles.metaValue}>{year}</span> · {genre}
      </p>
      <div className={`${styles.rating} ${!isRatingValid ? styles.ratingInvalid : ''}`}>
        {isRatingValid ? `★ ${rating} / 10` : 'Neplatné hodnocení'}
      </div>
      {watched && <span className={styles.badge}>✓ Zhlédnuto</span>}
      <div className={styles.actions}>
        <button className={styles.btnToggle} onClick={() => onToggleWatched(id)}>
          {watched ? 'Nezhlédnuto' : 'Zhlédnuto'}
        </button>
        <button className={styles.btnRemove} onClick={() => onRemove(id)}>
          Odebrat
        </button>
      </div>
    </div>
  );
}

export default FilmCard;