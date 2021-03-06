import React from 'react';
import logo from '../../images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';


function Header({loggedIn}) {
    const location = useLocation();

    const mobile = window.matchMedia('(max-width: 1023px)').matches;
    const [isBurgerOpen, SetIsBurgerOpen] = React.useState(false);

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
                    <NavLink to="/"><img src={logo} alt="логотип" className="header__logo btn-opacity-change"></img></NavLink>
                    {loggedIn ?
                        (<>
                            {mobile ?
                                (<>
                                    <nav className="header__links">
                                        <button className="burger btn-opacity-change" onClick={handleOpenBurger}></button>
                                    </nav>
                                </>)
                                :
                                (<>
                                    <nav className="header__tabs">
                                        <NavLink to="/movies" activeClassName="header__tab_active" className="header__tab_films btn-opacity-change">Фильмы</NavLink>
                                        <NavLink to="/saved-movies" activeClassName="header__tab_active" className="header__tab_saved-films btn-opacity-change">Сохранённые фильмы</NavLink>
                                    </nav>
                                    <nav className="header__links">
                                        <button className="header__account-btn btn-opacity-change"><NavLink to="/profile" className="header__link_account">Аккаунт</NavLink></button>
                                    </nav>
                                </>)
                            }</>)
                        :
                        (<nav className="header__links">
                            <NavLink to="/signup" className="header__link_reg btn-opacity-change">Регистрация</NavLink>
                            <button className="header__entrance-btn btn-opacity-change"><NavLink to="/signin" className="header__link_entrance">Войти</NavLink></button>
                        </nav>)
                    }
                </div>
                <div className={`burger-menu ${isBurgerOpen ? 'burger-menu_opened' : ' '}`}>
                    <div className='burger-menu__container'>
                        <button onClick={handleCloseBurger} className="burger-menu__close-btn" />
                        <div className="burger-menu__text">
                            <NavLink activeClassName="burger-menu__link_active" className="burger-menu__link btn-opacity-change" to="/" exact={true}>Главная</NavLink>
                            <NavLink activeClassName="burger-menu__link_active" className="burger-menu__link btn-opacity-change" to="/movies">Фильмы</NavLink>
                            <NavLink activeClassName="burger-menu__link_active" className="burger-menu__link btn-opacity-change" to="/saved-movies">Сохранённые фильмы</NavLink>
                        </div>
                        <button className="header__account-btn btn-opacity-change"><NavLink to="/profile" className="header__link_account">Аккаунт</NavLink></button>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;
