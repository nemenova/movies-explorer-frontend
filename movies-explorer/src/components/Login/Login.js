import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import useFormValidation from '../../utils/useFormValidation';


function Login({onLogin, isError}) {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const { values, handleChange, errors, isValid } = useFormValidation({
        email: '',
        password: '',
      });

    // function handleChangeEmail(e) {
    //     setEmail(e.target.value);
    // }
    // function handleChangePassword(e) {
    //     setPassword(e.target.value);
    // }
    function handleSubmit(e) {
        e.preventDefault();
        // if (!email || !password) {
        //     return;
        // }
        const { email, password } = values;
        onLogin(
            password,
            email
        );
    }
    return (
        <main className="content">
            <section className="welcome">

                <div className="welcome__container">
                    <NavLink to="/"><img className="welcome__logo" src={logo} alt="логотип" /></NavLink>
                    <p className="hello">Рады видеть!</p>
                    <form onSubmit={handleSubmit} className="welcome__form">
                        <fieldset className="welcome__form">
                            <label className="welcome__text" htmlFor="text-input">E-mail</label>
                            <input pattern='^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$' onChange={handleChange} value={values.email} autoComplete='off' minLength='2'
                                className="welcome__input" type="email" id="email-input" name='email' required />
                            <span className="welcome__error">{errors.email}</span>

                            <label className="welcome__text" htmlFor="text-input">Пароль</label>
                            <input onChange={handleChange} value={values.password} minLength='8'
                                className="welcome__input" type="password" id="password-input" name='password' required />
                            <span className="welcome__error">{errors.password}</span>
                        </fieldset>
                        {isError ? (<span className="profile__error">При попытке авторизации произошла ошибка.</span>) : null}
                        <button type='submit' className={`welcome__submit-btn_back  ${isValid ? 'welcome__submit-btn btn-opacity-change' : 'welcome__submit-btn_disabled'}`} disabled={!isValid}>Войти</button>
                    </form>
                    <span className="welcome__span">Ещё не зарегистрированы? <NavLink to="/signup" className="welcome__link btn-opacity-change">Регистрация</NavLink></span>
                </div>

            </section>
        </main>
    )
}

export default Login;
