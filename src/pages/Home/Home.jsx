import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={css.home}>
      <div className={css.homeContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.homeText}>You can find everything you want in our catalog</p>
        <button type="button" className={css.homeBtn} onClick={() => navigate('/catalog')}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default Home;
