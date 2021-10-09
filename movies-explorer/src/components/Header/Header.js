import React from 'react';
import logo from '../../images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';


function Header(props) {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const mobile = window.matchMedia('(max-width: 1023px)').matches;
    const [isBurgerOpen, SetIsBurgerOpen] = React.useState(false);

    React.useEffect(() => {
        if (location.pathname !== '/') {
            setLoggedIn(true)
        }
    }, [location, loggedIn]);

    function handleCloseBurger() {
        SetIsBurgerOpen(false);
    }

    function handleOpenBurger() {
        SetIsBurgerOpen(true);
    }

    return (
        <>

            <header className={`${location.pathname === '/' ? 'header_place_promo' : 'header'}`}>
                <div className="header__container">
                    <img src={logo} alt="логотип" className="header__logo"></img>
                    {loggedIn ?
                        (<>
                            {mobile ?
                                (<>
                                    <nav className="header__links">
                                        <button className="burger" onClick={handleOpenBurger}></button>
                                    </nav>
                                </>)
                                :
                                (<>
                                    <nav className="header__tabs">
                                        <NavLink to="/movies" className="header__tab_films">Фильмы</NavLink>
                                        <NavLink to="/saved-movies" className="header__tab_saved-films">Сохранённые фильмы</NavLink>
                                    </nav>
                                    <nav className="header__links">
                                        <button className="header__account-btn"><NavLink to="/profile" className="header__link_account">Аккаунт</NavLink></button>
                                    </nav>
                                </>)
                            }</>)
                        :
                        (<nav className="header__links">
                            <NavLink to="/signup" className="header__link_reg">Регистрация</NavLink>
                            <button className="header__entrance-btn"><NavLink to="/signin" className="header__link_entrance">Войти</NavLink></button>
                        </nav>)
                    }
                </div>
                <div className={`burger-menu ${isBurgerOpen ? 'burger-menu_opened' : ' '}`}>
                    <div className='burger-menu__container'>
                        <button onClick={handleCloseBurger} className="burger-menu__close-btn" />
                        <div className="burger-menu__text">
                            <NavLink className="burger-menu__link" to="/">Главная</NavLink>
                            <NavLink className="burger-menu__link" to="/movies">Фильмы</NavLink>
                            <NavLink className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</NavLink>
                        </div>
                        <button className="header__account-btn"><NavLink to="/profile" className="header__link_account">Аккаунт</NavLink></button>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;
