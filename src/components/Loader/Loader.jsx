import css from './Loader.module.css';

const Loader = ({
  message = 'Loading tracks...',
  subMessage = 'Please wait while we fetch the best travel trucks for you',
  fullScreen = true,
}) => {
  const loaderContent = (
    <div className={css.loaderCard} role="status" aria-live="polite">
      <div className={css.loaderSpinner}></div>

      <h3 className={css.loaderTitle}>{message}</h3>

      {subMessage && <p className={css.loaderText}>{subMessage}</p>}
    </div>
  );

  return fullScreen ? (
    <div className={css.backdrop}>{loaderContent}</div>
  ) : (
    <div className={css.wrapper}>{loaderContent}</div>
  );
};

export default Loader;
