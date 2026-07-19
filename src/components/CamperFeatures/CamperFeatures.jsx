import Badges from '../Badges/Badges';
import css from './CamperFeatures.module.css';

const CamperFeatures = ({ camper }) => {
  const details = [
    { label: 'Form', key: 'form' },
    { label: 'Length', key: 'length' },
    { label: 'Width', key: 'width' },
    { label: 'Height', key: 'height' },
    { label: 'Tank', key: 'tank' },
    { label: 'Consumption', key: 'consumption' },
  ];
  if (!camper) return null;

  return (
    <section className={css.featureContainer}>
      <div className={css.badges}>
        <Badges camper={camper} />
      </div>
      <div className={css.details}>
        <h3 className={css.title}>Vehicle details</h3>
        <ul className={css.detailsList}>
          {details.map(detail => (
            <li key={detail.key} className={css.detailRow}>
              <p className={css.label}>{detail.label}</p>
              <p className={css.value}>{camper[detail.key]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CamperFeatures;
