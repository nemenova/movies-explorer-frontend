import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'


function Register(props) {

    return (
        <main className="content">
        <section className="welcome">

            <div className="welcome__container">
            <NavLink to="/"><img className="welcome__logo" src={logo} alt="логотип" /></NavLink>
                <p className="hello">Добро пожаловать!</p>
                <form className="welcome__form">
                    <fieldset className="welcome__form">

                        <label className="welcome__text" htmlFor="text-input">Имя</label>
                        <input className="welcome__input" type="text" id="name-input" required />
                        <span className="welcome__error"></span>

                        <label className="welcome__text" htmlFor="text-input">E-mail</label>
                        <input className="welcome__input" type="email" id="email-input" required />
                        <span className="welcome__error"></span>

                        <label className="welcome__text" htmlFor="text-input">Пароль</label>
                        <input className="welcome__input" type="password" id="password-input" required />
                        <span className="welcome__error"></span>
                    </fieldset>
                    <button type='submit' className="welcome__submit-btn">Зарегистрироваться</button>
                </form>
                <span className="welcome__span">Уже зарегистрированы? <NavLink to="/signin" className="welcome__link btn-opacity-change">Войти</NavLink></span>
            </div>

        </section>
        </main>
    )

}

export default Register;


