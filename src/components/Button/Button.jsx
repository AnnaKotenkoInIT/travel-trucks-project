import css from './Button.module.css';

const Button = ({ children, type = 'button', onClick, className = '' }) => {
  return (
    <button type={type} className={`${css.buttonClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
