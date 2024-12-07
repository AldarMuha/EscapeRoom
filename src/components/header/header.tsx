import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserStatus } from '../../store/user-process/selectors';
import { logoutUser } from '../../store/action';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getUserStatus);
  const dispatch = useAppDispatch();
  const logoutClick = (event: Event) => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      event.preventDefault();
      dispatch(logoutUser());
    }
  };
  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Root}>
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Contacts}>
                Контакты
              </Link>
            </li>
            {
              (authorizationStatus === AuthorizationStatus.Auth)
                ? <li className="main-nav__item"><Link className="link" to={AppRoute.MyQuests}>Мои бронирования</Link></li>
                : ''
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn btn--accent header__side-item" to={AppRoute.Login} onClick={() => logoutClick}>
            {
              (authorizationStatus === AuthorizationStatus.Auth)
                ? 'Выйти'
                : 'Войти'
            }
          </Link>
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
