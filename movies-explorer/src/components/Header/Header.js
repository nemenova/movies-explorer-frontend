import React from 'react';
import logo from '../../images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';


function Header(props) {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (location.pathname !== '/') {
            setLoggedIn(true)
        }
    }, [location, loggedIn]);

    return (
        <header className={`${location.pathname === '/' ? 'header_place_promo' : 'header'}`}>
            <div className="header__container">
                <img src={logo} alt="логотип" className="header__logo"></img>
                {loggedIn ?
                    (
                        <>
                            <nav className="header__tabs">
                                <NavLink to="/movies" className="header__tab_films">Фильмы</NavLink>
                                <NavLink to="/saved-movies" className="header__tab_saved-films">Сохранённые фильмы</NavLink>
                            </nav>
                            <nav className="header__links">
                                <button className="header__account-btn"><NavLink to="/profile" className="header__link_account">Аккаунт</NavLink></button>
                            </nav>
                        </>)
                    :
                    (<nav className="header__links">
                        <NavLink to="/signup" className="header__link_reg">Регистрация</NavLink>
                        <button className="header__entrance-btn"><NavLink to="/signin" className="header__link_entrance">Войти</NavLink></button>
                    </nav>)
                }
            </div>
        </header>
    )

}

export default Header;
