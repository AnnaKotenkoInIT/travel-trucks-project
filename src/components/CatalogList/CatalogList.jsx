import Button from '../Button/Button';
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

      <Button className={css.loadBtn}>Load more</Button>
    </div>
  );
};

export default CatalogList;
