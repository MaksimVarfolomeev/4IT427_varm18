import FilmCard from './components/FilmCard';


const films = [
  { title: "Vykoupení z věznice Shawshank", year: 1994, genre: "Drama", rating: 9, watched: true },
  { title: "Forrest Gump", year: 1994, genre: "Komedie", rating: 7, watched: false },
  { title: "Sedm", year: 1995, genre: "Krimi", rating: 8, watched: false },
];


function App() {
  function handleToggleWatched(title: string) {
    console.log(`Změna stavu zhlédnutí pro: ${title}`);}
  return (
    <div>
      <h1>Film Watchlist</h1>
      {films.map((film) => (
        <FilmCard
          key={film.title}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={handleToggleWatched}
        />
      ))}
    </div>
  );
}

export default App
