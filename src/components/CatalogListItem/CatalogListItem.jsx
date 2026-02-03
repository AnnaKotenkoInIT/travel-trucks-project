import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleFavourite } from '../../redux/campers/slice';
import icons from '../../images/icons.svg';
import css from './CatalogListItem.module.css';
import Badges from '../Badges/Badges';

const CatalogListItem = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const price = `€${camper.price.toFixed(2).replace('.', ',')}`;

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <>
      <div className={css.card}>
        <div className={css.imageContainer}>
          <img src={camper.gallery[0].thumb} alt={camper.name} className={css.mainImage} />
        </div>
        <div className={css.mainData}>
          <div className={css.info}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <div className={css.priceAndFav}>
              <p className={css.price}>{price}</p>
              <button onClick={() => dispatch(toggleFavourite(camper.id))} className={css.favBtn}>
                <svg className={css.favIcon} width="24" height="24">
                  <use href={`${icons}#icon-favourite`} />
                </svg>
              </button>
            </div>
          </div>

          <ul className={css.data}>
            <li>
              <svg className={css.starIcon} width="16" height="16">
                <use href={`${icons}#icon-star`} />
              </svg>
              {camper.rating} ({camper.reviews.length} Reviews)
            </li>
            <li className={css.dataText}>
              <svg className={css.mapIcon} width="16" height="16">
                <use href={`${icons}#icon-map`} />
              </svg>
              {camper.location}
            </li>
          </ul>

          <p className={css.description}>{camper.description}</p>
          <div className={css.badges}>
            <Badges camper={camper} />
          </div>
          <button className={css.moreBtn} onClick={handleShowMore}>
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default CatalogListItem;
