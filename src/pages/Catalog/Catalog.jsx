import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectAllCampers } from '../../redux/campers/selectors';
import css from './Catalog.module.css';
import Filters from '../../components/Filters/Filters';
import CatalogList from '../../components/CatalogList/CatalogList';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectAllCampers);

  console.log('campers', campers);

  return (
    <div className={css.catalogContainer}>
      <Filters />
      <CatalogList campers={campers} />
    </div>
  );
};

export default Catalog;
