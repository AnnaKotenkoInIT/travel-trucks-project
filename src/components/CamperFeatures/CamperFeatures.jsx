import css from './CamperFeatures.module.css';

const formatLabel = text => {
  if (!text) return '';

  return text.replace(/([A-Z])/g, ' $1').replace(/^./, char => char.toUpperCase());
};

const CamperFeatures = ({ camper }) => {
  if (!camper) return null;

  const features = [
    { key: 'transmission', label: formatLabel(camper.transmission) },
    { key: 'engine', label: formatLabel(camper.engine) },
    { key: 'AC', label: 'AC' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'TV', label: 'TV' },
    { key: 'radio', label: 'Radio' },
    { key: 'refrigerator', label: 'Refrigerator' },
    { key: 'microwave', label: 'Microwave' },
    { key: 'gas', label: 'Gas' },
    { key: 'water', label: 'Water' },
  ];

  const details = [
    { label: 'Form', value: formatLabel(camper.form) },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <section className={css.featureContainer}>
      <h3 className={css.title}>Vehicle details</h3>

      <div className={css.badges}>
        {features.map(
          feature =>
            camper[feature.key] && (
              <div key={feature.key} className={css.badge}>
                {feature.label}
              </div>
            )
        )}
      </div>

      <div className={css.divider}></div>

      <div className={css.details}>
        <ul className={css.detailsList}>
          {details.map(detail => (
            <li key={detail.label} className={css.detailRow}>
              <span className={css.label}>{detail.label}</span>
              <span className={css.value}>{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CamperFeatures;
