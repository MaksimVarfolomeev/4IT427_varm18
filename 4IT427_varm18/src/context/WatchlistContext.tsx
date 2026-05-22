import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Film } from '../types/film.types';

interface WatchlistContextValue {
  films: Film[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  addFilm: (film: Omit<Film, 'id' | 'watched'>) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
}

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

async function fetchFilms(): Promise<Film[]> {
  const res = await fetch('/films.json');
  if (!res.ok) throw new Error('Nepodařilo se načíst filmy.');
  return res.json();
}

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
  });

  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (data) setFilms(data);
  }, [data]);

  useEffect(() => {
    const watchedCount = films.filter(f => f.watched).length;
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`;
  }, [films]);

  function addFilm(filmData: Omit<Film, 'id' | 'watched'>) {
    const newFilm: Film = { ...filmData, id: Date.now().toString(), watched: false };
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
    <WatchlistContext.Provider value={{ films, isLoading, isError, refetch, addFilm, removeFilm, toggleWatched, markAllAsWatched }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error('useWatchlist must be used inside WatchlistProvider');
  return ctx;
}