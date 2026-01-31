import icons from '../../images/icons.svg';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.valuesIcons}>
        <svg width="136" height="16">
          <use href={`${icons}#icon-logo`} />
        </svg>
      </div>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <a href="" className={css.link}>
              Home
            </a>
          </li>
          <li className={css.navItem}>
            <a href="" className={css.link}>
              Catalog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
