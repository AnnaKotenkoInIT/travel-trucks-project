import { useDispatch, useSelector } from 'react-redux';

import { chooseLocation, chooseForm, chooseEngine, chooseTransmission, clearFilters } from '../../redux/filters/slice';

import { selectLocation, selectForm, selectEngine, selectTransmission } from '../../redux/filters/selectors';

import Button from '../Button/Button';

import css from './Filters.module.css';
import icons from '../../images/icons.svg';

const camperForms = [
  {
    value: 'alcove',
    label: 'Alcove',
  },
  {
    value: 'panelVan',
    label: 'Panel Van',
  },
  {
    value: 'integrated',
    label: 'Integrated',
  },
  {
    value: 'semiIntegrated',
    label: 'Semi Integrated',
  },
];

const engines = [
  {
    value: 'diesel',
    label: 'Diesel',
  },
  {
    value: 'petrol',
    label: 'Petrol',
  },
  {
    value: 'hybrid',
    label: 'Hybrid',
  },
  {
    value: 'electric',
    label: 'Electric',
  },
];

const transmissions = [
  {
    value: 'automatic',
    label: 'Automatic',
  },
  {
    value: 'manual',
    label: 'Manual',
  },
];

const Filters = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const form = useSelector(selectForm);
  const engine = useSelector(selectEngine);
  const transmission = useSelector(selectTransmission);

  const handleSearch = () => {
    return;
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  return (
    <aside className={css.filterContainer}>
      <div className={`${css.section} ${css.locationSection}`}>
        <label className={css.label}>Location</label>

        <div className={css.inputWrapper}>
          <svg className={css.inputIcon} width="20" height="20">
            <use href={`${icons}#icon-map`} />
          </svg>

          <input
            className={css.input}
            type="text"
            placeholder="Kyiv"
            value={location}
            onChange={e => dispatch(chooseLocation(e.target.value))}
          />
        </div>
      </div>

      <h2 className={css.filtersTitle}>Filters</h2>

      <div className={css.section}>
        <h3 className={css.groupTitle}>Camper form</h3>

        {camperForms.map(item => (
          <label key={item.value} className={css.radioLabel}>
            <input
              className={css.radioInput}
              type="radio"
              name="form"
              checked={form === item.value}
              onChange={() => dispatch(chooseForm(item.value))}
            />

            <span className={css.customRadio}></span>

            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <div className={css.section}>
        <h3 className={css.groupTitle}>Engine</h3>

        {engines.map(item => (
          <label key={item.value} className={css.radioLabel}>
            <input
              className={css.radioInput}
              type="radio"
              name="engine"
              checked={engine === item.value}
              onChange={() => dispatch(chooseEngine(item.value))}
            />

            <span className={css.customRadio}></span>

            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <div className={`${css.section} ${css.transmissionSection}`}>
        <h3 className={css.groupTitle}>Transmission</h3>

        {transmissions.map(item => (
          <label key={item.value} className={css.radioLabel}>
            <input
              className={css.radioInput}
              type="radio"
              name="transmission"
              checked={transmission === item.value}
              onChange={() => dispatch(chooseTransmission(item.value))}
            />

            <span className={css.customRadio}></span>

            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <div className={css.buttons}>
        <Button onClick={handleSearch}>Search</Button>

        <Button className={css.clearBtn} type="button" onClick={handleClear}>
          <svg className={css.clearIcon}>
            <use href={`${icons}#icon-cross`} />
          </svg>

          <span>Clear filters</span>
        </Button>
      </div>
    </aside>
  );
};

export default Filters;
