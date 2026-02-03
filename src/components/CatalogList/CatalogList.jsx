import CatalogListItem from '../CatalogListItem/CatalogListItem';
import css from './CatalogList.module.css';

const CatalogList = ({ campers }) => {
  if (!campers || campers.length === 0) return null;

  return (
    <div className={css.catalogListContainer}>
      <ul className={css.list}>
        {campers.map(camper => (
          <li key={camper.id} className={css.item}>
            <CatalogListItem camper={camper} />
          </li>
        ))}
      </ul>
      <button type="button" className={css.loadBtn}>
        Load more
      </button>
    </div>
  );
};

export default CatalogList;
