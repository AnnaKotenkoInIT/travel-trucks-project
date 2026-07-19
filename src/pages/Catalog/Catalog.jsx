import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../redux/campers/operations';

import { selectLoading, selectFilteredCampers } from '../../redux/campers/selectors';

import css from './Catalog.module.css';

import Filters from '../../components/Filters/Filters';
import CatalogList from '../../components/CatalogList/CatalogList';
import NotFound from '../../components/NotFound/NotFound';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalogContainer}>
      <Filters />

      {loading ? <Loader /> : campers.length === 0 ? <NotFound /> : <CatalogList campers={campers} />}
    </div>
  );
};

export default Catalog;
