import { useState, useEffect } from 'react';

interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

function useWatchlist(initialFilms: Film[]) {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  useEffect(() => {
    const watchedCount = films.filter(f => f.watched).length;
    document.title = `Watchlist (${watchedCount} z ${films.length} zhlédnuto)`;
  }, [films]);

  function toggleWatched(title: string) {
    setFilms(prev =>
      prev.map(f => f.title === title ? { ...f, watched: !f.watched } : f)
    );
  }

  function markAllAsWatched() {
    setFilms(prev => prev.map(f => ({ ...f, watched: true })));
  }

  return { films, toggleWatched, markAllAsWatched };
}

export default useWatchlist;