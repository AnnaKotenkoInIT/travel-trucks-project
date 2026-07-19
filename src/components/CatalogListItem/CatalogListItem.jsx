import { useNavigate } from 'react-router-dom';

import icons from '../../images/icons.svg';
import css from './CatalogListItem.module.css';

const formatCamelCase = value => {
  if (!value) return '';

  return value.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, char => char.toUpperCase());
};

const CatalogListItem = ({ camper }) => {
  const navigate = useNavigate();

  const price = `€${camper.price.toFixed(2).replace('.', ',')}`;

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const badges = [
    {
      id: 'engine',
      icon: 'icon-engine',
      text: formatCamelCase(camper.engine),
    },
    {
      id: 'transmission',
      icon: 'icon-transmission',
      text: formatCamelCase(camper.transmission),
    },
    {
      id: 'form',
      icon: 'icon-form',
      text: formatCamelCase(camper.form),
    },
  ].filter(item => item.text);

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img src={camper.gallery[0].thumb} alt={camper.name} className={css.mainImage} />
      </div>

      <div className={css.mainData}>
        <div className={css.info}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <p className={css.price}>{price}</p>
        </div>

        <ul className={css.data}>
          <li className={css.dataText}>
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

        <ul className={css.badges}>
          {badges.map(item => (
            <li key={item.id} className={css.badge}>
              <svg className={css.badgeIcon} width="20" height="20">
                <use href={`${icons}#${item.icon}`} />
              </svg>

              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <button className={css.moreBtn} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CatalogListItem;
