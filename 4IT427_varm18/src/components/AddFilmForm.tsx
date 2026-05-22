import { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';

function AddFilmForm() {
  const { addFilm } = useWatchlist();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !year || !genre || !rating) return;
    addFilm({ title, year: Number(year), genre, rating: Number(rating) });
    setTitle('');
    setYear('');
    setGenre('');
    setRating('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Přidat film</h2>
      <input placeholder="Název" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Rok" type="number" value={year} onChange={e => setYear(e.target.value)} />
      <input placeholder="Žánr" value={genre} onChange={e => setGenre(e.target.value)} />
      <input placeholder="Hodnocení (1–10)" type="number" min="1" max="10" value={rating} onChange={e => setRating(e.target.value)} />
      <button type="submit">Přidat</button>
    </form>
  );
}

export default AddFilmForm;