import css from './CamperReviews.module.css';
import icons from '../../images/icons.svg';

const CamperReviews = ({ camper }) => {
  if (!camper || !camper.reviews || camper.reviews.length === 0) {
    return <p className={css.noReviews}>There are no reviews for this camper.</p>;
  }

  const fetchStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg key={index} className={index < rating ? css.starYellow : css.starGrey} width="16" height="16">
        <use href={`${icons}#icon-star`} />
      </svg>
    ));
  };

  return (
    <ul className={css.reviewsList}>
      {camper.reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.reviewData}>
            <div className={css.avatarContainer}>
              <div className={css.avatar}>{review.reviewer_name.charAt(0).toUpperCase()}</div>
            </div>
            <div className={css.nameAndRaiting}>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.stars}>{fetchStars(review.reviewer_rating)}</div>
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
