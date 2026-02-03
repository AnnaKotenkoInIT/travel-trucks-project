import BookingForm from '../../components/BookingForm/BookingForm';
import CamperDescription from '../../components/CamperDescription/CamperDescription';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';

const CamperCard = () => {
  return (
    <>
      <CamperDescription />
      <CamperFeatures />
      <CamperReviews />
      <BookingForm />
    </>
  );
};

export default CamperCard;
