/* Stylingová metoda: CSS Modules */
import { useWatchlist } from './context/WatchlistContext';
import FilmCard from './components/FilmCard';
import AddFilmForm from './components/AddFilmForm';
import styles from './App.module.css';

function App() {
  const { films, toggleWatched, removeFilm, markAllAsWatched } = useWatchlist();
  const watchedCount = films.filter(f => f.watched).length;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Film<span className={styles.titleAccent}>list</span>
        </h1>
        <p className={styles.subtitle}>{watchedCount} / {films.length} zhlédnuto</p>
      </header>

      <AddFilmForm />

      <hr className={styles.divider} />

      <div className={styles.topBar}>
        <span style={{ fontSize: '0.95rem', fontWeight: 800,color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          {films.length} {films.length === 1 ? 'film' : 'filmů'} ve watchlistu
        </span>
        <button className={styles.markAllBtn} onClick={markAllAsWatched}>
          Označit vše jako zhlédnuté
        </button>
      </div>

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

export default App;