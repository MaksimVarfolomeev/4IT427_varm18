import { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import styles from './AddFilmForm.module.css';

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
    setTitle(''); setYear(''); setGenre(''); setRating('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Přidat film</p>
      <div className={styles.fields}>
        <div className={styles.fieldFull}>
          <input
            className={styles.input}
            placeholder="Název filmu"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <input
          className={styles.input}
          placeholder="Rok"
          type="number"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Žánr"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Hodnocení (1–10)"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.submit}>+ Přidat do watchlistu</button>
    </form>
  );
}

export default AddFilmForm;