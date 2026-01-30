import icons from '../../images/icons.svg'
import css from './Header.module.css';


const Header = () => {
    return (
        <header className={css.header}>
            <h1>Hello </h1>
                <div className={css.valuesIcons}>
                    <svg viewBox="0 0 32 32" width="32" height="32">
                        <use href={`${icons}#icon-favourite`} />
                    </svg>
                </div>
        </header>
    );
};

export default Header;
