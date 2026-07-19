import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campers/operations';
import { selectCurrentCamper } from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
// import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import icons from '../../images/icons.svg';
import css from './CamperCard.module.css';

const CamperCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  if (!camper) return null;

  const price = `€${camper.price.toFixed(2).replace('.', ',')}`;

  return (
    <div className={css.cardContainer}>
      <div className={css.descriptionPart}>
        <h2 className={css.camperName}>{camper.name}</h2>
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
        <p className={css.price}>{price}</p>
        <div className={css.imgFolder}>
          {camper.gallery.map((img, index) => (
            <img key={index} src={img.original} alt={camper.name} className={css.camperImg} />
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
      </div>

      <div className={css.camperTabs}>
        <button
          className={`${css.tabButton} ${activeTab === 'features' ? css.activeTab : ''}`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>

        <button
          className={`${css.tabButton} ${activeTab === 'reviews' ? css.activeTab : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={css.tabsAndBoobContainer}>
        {activeTab === 'reviews' && <CamperReviews camper={camper} />}

        <BookingForm camper={camper} />
      </div>
    </div>
  );
};

export default CamperCard;
