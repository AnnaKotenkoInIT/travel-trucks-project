import icons from '../../images/icons.svg';
import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link to="/">
          <div className={css.valuesIcons}>
            <svg width="136" height="16">
              <use href={`${icons}#icon-logo`} />
            </svg>
          </div>
        </Link>

        <nav>
          <ul className={css.navList}>
            <li className={css.listItem}>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li className={css.listItem}>
              <NavLink to="/catalog" className={css.link}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
