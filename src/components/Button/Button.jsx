import css from './Button.module.css';

const Button = ({ children }) => {
  return <button className={css.buttonClass}>{children}</button>;
};

export default Button;
