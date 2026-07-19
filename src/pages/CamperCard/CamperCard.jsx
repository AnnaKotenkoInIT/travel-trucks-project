import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCamper } from '../../redux/campers/operations';
import { selectCurrentCamper } from '../../redux/campers/selectors';

import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import BookingForm from '../../components/BookingForm/BookingForm';

import icons from '../../images/icons.svg';
import css from './CamperCard.module.css';

const CamperCard = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  if (!camper) return null;

  const mainImage = activeImage || camper.gallery[0]?.original;

  const price = `€${camper.price.toFixed(2).replace('.', ',')}`;

  return (
    <section className={css.container}>
      <div className={css.topSection}>
        <div className={css.gallerySection}>
          <img src={mainImage} alt={camper.name} className={css.mainImage} />

          <div className={css.gallery}>
            {camper.gallery.map(image => (
              <img
                key={image.thumb}
                src={image.thumb}
                alt={camper.name}
                className={`${css.galleryImage} ${mainImage === image.original ? css.activeImage : ''}`}
                onClick={() => setActiveImage(image.original)}
              />
            ))}
          </div>
        </div>

        <div className={css.info}>
          <div className={css.mainInfo}>
            <h2 className={css.titleName}>{camper.name}</h2>

            <div className={css.meta}>
              <span>
                <svg className={css.starIcon} width="16" height="16">
                  <use href={`${icons}#icon-star`} />
                </svg>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>

              <span>
                <svg className={css.mapIcon} width="16" height="16">
                  <use href={`${icons}#icon-map`} />
                </svg>

                {camper.location}
              </span>
            </div>

            <p className={css.price}>{price}</p>

            <p className={css.description}>{camper.description}</p>
          </div>

          <CamperFeatures camper={camper} />
        </div>
      </div>

      <div className={css.bottomSection}>
        <h3 className={css.sectionTitle}>Reviews</h3>

        <div className={css.bottomContent}>
          <CamperReviews camper={camper} />

          <BookingForm camperId={camper.id} />
        </div>
      </div>
    </section>
  );
};

export default CamperCard;
