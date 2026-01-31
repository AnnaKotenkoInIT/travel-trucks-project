import css from './Home.module.css';

const Home = () => {
  return (
    <section className={css.home}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.homeText}>You can find everything you want in our catalog</p>
      <button type="button" className={css.homeBtn}>
        View Now
      </button>
    </section>
  );
};

export default Home;
