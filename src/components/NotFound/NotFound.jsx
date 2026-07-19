import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearFilters } from '../../redux/filters/slice';

import css from './NotFound.module.css';
import notFoundImage from '../../images/not-found.webp';
import icons from '../../images/icons.svg';

const NotFound = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFilters());
  };

  return (
    <div className={css.container}>
      <img src={notFoundImage} alt="No campers found" className={css.image} />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.text}>
        We couldn't find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.buttons}>
        <button type="button" className={css.clearButton} onClick={handleClear}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-cross`} />
          </svg>
          Clear filters
        </button>

        <Link to="/catalog" className={css.viewButton} onClick={handleClear}>
          View all campers
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
