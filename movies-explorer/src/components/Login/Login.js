import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import useFormValidation from '../../utils/useFormValidation';


function Login(props) {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const { values, handleChange, errors, isValid } = useFormValidation();

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
        props.onLogin(
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
                            <input onChange={handleChange} value={values.email} autoComplete='off' minLength='2'
                                className="welcome__input" type="email" id="email-input" required />
                            <span className="welcome__error">{errors.email}</span>

                            <label className="welcome__text" htmlFor="text-input">Пароль</label>
                            <input onChange={handleChange} value={values.password} minLength='8'
                                className="welcome__input" type="password" id="password-input" required />
                            <span className="welcome__error">{errors.password}</span>
                        </fieldset>
                        <button type='submit' className={`welcome__submit-btn_back ${isValid ? 'welcome__submit-btn' : 'welcome__submit-btn_disabled'}`}>Войти</button>
                    </form>
                    <span className="welcome__span">Ещё не зарегистрированы? <NavLink to="/signup" className="welcome__link btn-opacity-change">Регистрация</NavLink></span>
                </div>

            </section>
        </main>
    )
}

export default Login;
