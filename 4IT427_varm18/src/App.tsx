/* Stylingová metoda: CSS Modules */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import WatchlistPage from './pages/WatchlistPage';
import AddFilmPage from './pages/AddFilmPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Film<span className={styles.titleAccent}>list</span>
        </h1>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
          >
            Můj watchlist
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
          >
            Přidat film
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;