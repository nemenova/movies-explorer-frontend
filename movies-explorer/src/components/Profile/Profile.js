import React from 'react';
import { NavLink } from 'react-router-dom';


function Profile(props) {

    return (
        <section className="profile">

            <div className="profile__container">
                <p className="hello">Привет, Виталий!</p>
                <ul className="profile__list">
                    <li className="profile__item">
                        <p className="profile__text">
                            Имя
                        </p>
                        <p className="profile__text">
                            Виталий
                        </p>
                    </li>
                    <li className="profile__item">
                        <p className="profile__text">
                            E-mail
                        </p>
                        <p className="profile__text">
                            pochta@yandex.ru
                        </p>
                    </li>
                </ul>
                <NavLink to="/signup"  className="profile__link-edit">Редактировать</NavLink>
                <NavLink to="/" className="profile__link-exit">Выйти из аккаунта</NavLink>
            </div>

        </section>
    )

}

export default Profile;