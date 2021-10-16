import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import useFormValidation from '../../utils/useFormValidation';

function Register({onRegister, isError}) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password, name } = values;
        onRegister(password, email, name);
      }

    return (
        <main className="content">
        <section className="welcome">

            <div className="welcome__container">
            <NavLink to="/"><img className="welcome__logo" src={logo} alt="логотип" /></NavLink>
                <p className="hello">Добро пожаловать!</p>
                <form className="welcome__form" onSubmit={handleSubmit}>
                    <fieldset className="welcome__form">

                        <label className="welcome__text" htmlFor="text-input">Имя</label>
                        <input pattern="/[^`a-zа-яё -]/iu" onChange={handleChange} className="welcome__input" type="text" name='name' id="name-input" autoComplete='off' minLength='2' maxLength='40' required />
                        <span className="welcome__error">{errors.name}</span>

                        <label className="welcome__text" htmlFor="text-input">E-mail</label>
                        <input onChange={handleChange} value={values.email}
                        className="welcome__input" type="email" id="email-input" name='email' required />
                        <span className="welcome__error">{errors.email}</span>

                        <label className="welcome__text" htmlFor="text-input">Пароль</label>
                        <input onChange={handleChange} value={values.password}
                        className="welcome__input" type="password" id="password-input" name='password' minLength='8' required />
                        <span className="welcome__error">{errors.password}</span>
                    </fieldset>
                    <button type='submit' className={`${isValid ? 'welcome__submit-btn btn-opacity-change' : 'welcome__submit-btn_disabled'}`} disabled={!isValid}>Зарегистрироваться</button>
                </form>
                <span className="welcome__span">Уже зарегистрированы? <NavLink to="/signin" className="welcome__link btn-opacity-change">Войти</NavLink></span>
            </div>

        </section>
        </main>
    )

}

export default Register;


