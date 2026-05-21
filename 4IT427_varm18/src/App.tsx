import FilmCard from './components/FilmCard';
import useWatchlist from './hooks/useWatchlist';

const initialFilms = [
  { title: "Vykoupení z věznice Shawshank", year: 1994, genre: "Drama", rating: 9, watched: true },
  { title: "Forrest Gump", year: 1994, genre: "Komedie", rating: 7, watched: false },
  { title: "Sedm", year: 1995, genre: "Krimi", rating: 8, watched: false },
];

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist(initialFilms);

  return (
    <div>
      <h1>Film Watchlist</h1>
      <button onClick={markAllAsWatched}>Označit vše jako zhlédnuté</button>
      {films.map((film) => (
        <FilmCard
          key={film.title}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={toggleWatched}
        />
      ))}
    </div>
  );
}

export default App;