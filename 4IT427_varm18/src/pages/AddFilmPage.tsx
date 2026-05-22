import AddFilmForm from '../components/AddFilmForm';
import styles from './AddFilmPage.module.css';

function AddFilmPage() {
  return (
    <div className={styles.wrapper}>
      <AddFilmForm />
    </div>
  );
}

export default AddFilmPage;