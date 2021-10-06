import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'


function Login(props) {

    return (
        <section clasclassNames="welcome">

            <div className="welcome__container">
                <img className="welcome__logo" src={logo} alt="логотип" />
                <p className="hello">Рады видеть!</p>
                <form className="welcome__form">
                    <fieldset className="welcome__form">
                        <label className="welcome__text" for="text-input">E-mail</label>
                        <input className="welcome__input" type="email" id="email-input" required />
                        <span className="welcome__error"></span>

                        <label className="welcome__text" for="text-input">Пароль</label>
                        <input className="welcome__input" type="password" id="password-input" required />
                        <span className="welcome__error"></span>
                    </fieldset>
                    <submit className="welcome__submit-btn welcome__submit-btn_back">Войти</submit>
                </form>
                <span className="welcome__span">Ещё не зарегистрированы? <NavLink to="/signup" className="welcome__link">Регистрация</NavLink></span>
            </div>

        </section>
    )
}

export default Login;
