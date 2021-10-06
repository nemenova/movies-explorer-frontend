import React from 'react';
import { NavLink } from 'react-router-dom';


function ErrorNotFound(props) {

    return (
        <section className="error">
            <div className="error__container">
                <p className="error__number">404</p>
                <span className="error__span">Страница не найдена</span>
                <NavLink to="/" className="error__link">Назад</NavLink>
            </div>
        </section>
    )
}

export default ErrorNotFound;

