import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Film } from '../types/film.types';

interface WatchlistContextValue {
  films: Film[];
  addFilm: (film: Omit<Film, 'id' | 'watched'>) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

const initialFilms: Film[] = [
  { id: '1', title: "Vykoupení z věznice Shawshank", year: 1994, genre: "Drama", rating: 9, watched: true },
  { id: '2', title: "Forrest Gump", year: 1994, genre: "Komedie", rating: 7, watched: false },
  { id: '3', title: "Sedm", year: 1995, genre: "Krimi", rating: 8, watched: false },
];

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [films, setFilms] = useState<Film[]>(initialFilms);

  useEffect(() => {
    const watchedCount = films.filter(f => f.watched).length;
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`;
  }, [films]);

  function addFilm(data: Omit<Film, 'id' | 'watched'>) {
    const newFilm: Film = { ...data, id: crypto.randomUUID(), watched: false };
    setFilms(prev => [...prev, newFilm]);
  }

  function removeFilm(id: string) {
    setFilms(prev => prev.filter(f => f.id !== id));
  }

  function toggleWatched(id: string) {
    setFilms(prev => prev.map(f => f.id === id ? { ...f, watched: !f.watched } : f));
  }

  function markAllAsWatched() {
    setFilms(prev => prev.map(f => ({ ...f, watched: true })));
  }

  return (
    <WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error('useWatchlist must be used inside WatchlistProvider');
  return ctx;
}