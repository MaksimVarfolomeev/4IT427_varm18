import { useWatchlist } from '../context/WatchlistContext';
import FilmCard from '../components/FilmCard';
import styles from './WatchlistPage.module.css';

function WatchlistPage() {
  const { films, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();
  const watchedCount = films.filter(f => f.watched).length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <span className={styles.count}>
          {films.length} {films.length === 1 ? 'film' : 'filmů'} ve watchlistu
        </span>
        <button className={styles.markAllBtn} onClick={markAllAsWatched}>
          Označit vše jako zhlédnuté
        </button>
      </div>

      <p className={styles.subtitle}>{watchedCount} / {films.length} zhlédnuto</p>

      <div className={styles.grid}>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            title={film.title}
            year={film.year}
            genre={film.genre}
            rating={film.rating}
            watched={film.watched}
            onToggleWatched={toggleWatched}
            onRemove={removeFilm}
          />
        ))}
      </div>
    </div>
  );
}

export default WatchlistPage;