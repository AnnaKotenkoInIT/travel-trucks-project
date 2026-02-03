import { useDispatch, useSelector } from 'react-redux';
import { chooseEquipment, chooseLocation, chooseType } from '../../redux/filters/slice';
import css from './Filters.module.css';
import icons from '../../images/icons.svg';
import { fetchCampers } from '../../redux/campers/operations';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const equipment = [
    {
      id: 'AC',
      label: 'AC',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-wind`} />
        </svg>
      ),
    },
    {
      id: 'transmission',
      label: 'Automatic',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-diagram`} />
        </svg>
      ),
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-cup-hot`} />
        </svg>
      ),
    },
    {
      id: 'TV',
      label: 'TV',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-tv`} />
        </svg>
      ),
    },
    {
      id: 'bathroom',
      label: 'Bathroom',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-shower`} />
        </svg>
      ),
    },
  ];

  const vehicleTypes = [
    {
      id: 'panelTruck',
      label: 'Van',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-grid-1x2`} />
        </svg>
      ),
    },
    {
      id: 'fullyIntegrated',
      label: 'Fully Integrated',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-grid-2x2`} />
        </svg>
      ),
    },
    {
      id: 'alcove',
      label: 'Alcove',
      icon: (
        <svg className={css.btnIcon}>
          <use href={`${icons}#icon-grid-3x3`} />
        </svg>
      ),
    },
  ];

  const handleSearch = () => {
    dispatch(fetchCampers({ page: 1, filters }));
  };

  return (
    <div className={css.filterContainer}>
      <div className={css.section}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <svg className={css.inputIcon} width="20" height="20">
            <use href={`${icons}#icon-map`} />
          </svg>
          <input
            type="text"
            placeholder="City, Country"
            value={filters.location}
            onChange={e => dispatch(chooseLocation(e.target.value))}
            className={css.input}
          />
        </div>
      </div>

      <p className={css.sectionName}>Filters</p>

      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle equipment</h3>

        <div className={css.grid}>
          {equipment.map(item => (
            <button key={item.id} className={css.filterBtn} onClick={() => dispatch(chooseEquipment(item.id))}>
              {item.icon}
              <span className={css.btnText}>{item.label}</span>
            </button>
          ))}
        </div>

        <h3 className={css.sectionTitle}>Vehicle type</h3>

        <div className={css.grid}>
          {vehicleTypes.map(type => (
            <button key={type.id} className={css.filterBtn} onClick={() => dispatch(chooseType(type.id))}>
              {type.icon}
              <span className={css.btnText}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button type="button" className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
