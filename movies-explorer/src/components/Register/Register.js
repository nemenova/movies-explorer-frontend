import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'


function Register(props) {

    return (
        <section className="welcome">

            <div className="welcome__container">
                <img className="welcome__logo" src={logo} alt="логотип" />
                <p className="hello">Добро пожаловать!</p>
                <form className="welcome__form">
                    <fieldset className="welcome__form">

                        <label className="welcome__text" for="text-input">Имя</label>
                        <input className="welcome__input" type="text" id="name-input" required />
                        <span className="welcome__error"></span>

                        <label className="welcome__text" for="text-input">E-mail</label>
                        <input className="welcome__input" type="email" id="email-input" required />
                        <span className="welcome__error"></span>

                        <label className="welcome__text" for="text-input">Пароль</label>
                        <input className="welcome__input" type="password" id="password-input" required />
                        <span className="welcome__error"></span>
                    </fieldset>
                    <submit className="welcome__submit-btn">Зарегистрироваться</submit>
                </form>
                <span className="welcome__span">Уже зарегистрированы? <NavLink to="/signin" className="welcome__link">Войти</NavLink></span>
            </div>

        </section>
    )

}

export default Register;


