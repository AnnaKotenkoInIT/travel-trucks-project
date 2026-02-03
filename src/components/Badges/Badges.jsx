import css from './Badges.module.css';
import icons from '../../images/icons.svg';

const Badges = ({ camper }) => {
  const badges = [
    {
      id: 'transmission',
      label: camper.transmission,
      icon: 'icon-diagram',
      value: true,
    },
    { id: 'engine', label: camper.engine, icon: 'icon-fuel', value: true },
    { id: 'AC', label: 'AC', value: camper.AC, icon: 'icon-wind' },
    {
      id: 'bathroom',
      label: 'Bathroom',
      value: camper.bathroom,
      icon: 'icon-shower',
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      value: camper.kitchen,
      icon: 'icon-cup-hot',
    },
    { id: 'TV', label: 'TV', value: camper.TV, icon: 'icon-tv' },
    { id: 'radio', label: 'Radio', value: camper.radio, icon: 'icon-radio' },
    {
      id: 'refrigerator',
      label: 'Refrigerator',
      value: camper.refrigerator,
      icon: 'icon-fridge',
    },
    {
      id: 'microwave',
      label: 'Microwave',
      value: camper.microwave,
      icon: 'icon-microwave',
    },
    { id: 'gas', label: 'Gas', value: camper.gas, icon: 'icon-gas-stove' },
    { id: 'water', label: 'Water', value: camper.water, icon: 'icon-water' },
  ].filter(feature => feature.value !== false);

  return (
    <div className={css.container}>
      <ul className={css.badgeList}>
        {badges.map(item => (
          <li key={item.id} className={css.badgeItem}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#${item.icon}`} />
            </svg>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Badges;
