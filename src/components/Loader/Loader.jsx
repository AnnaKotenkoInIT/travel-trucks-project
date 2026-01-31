import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.load}>
    <Circles
      height="80"
      width="80"
      color="#D84343"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
