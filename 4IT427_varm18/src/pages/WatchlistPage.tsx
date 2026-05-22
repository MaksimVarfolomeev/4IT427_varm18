import { useWatchlist } from '../context/WatchlistContext';
import FilmCard from '../components/FilmCard';
import styles from './WatchlistPage.module.css';

function WatchlistPage() {
  const { films, isLoading, isError, refetch, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();
  const watchedCount = films.filter(f => f.watched).length;

  if (isLoading) {
    return <div className={styles.state}>Načítám…</div>;
  }

  if (isError) {
    return (
      <div className={styles.state}>
        <p className={styles.errorMsg}>Nepodařilo se načíst filmy.</p>
        <button className={styles.retryBtn} onClick={() => refetch()}>Zkusit znovu</button>
      </div>
    );
  }

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