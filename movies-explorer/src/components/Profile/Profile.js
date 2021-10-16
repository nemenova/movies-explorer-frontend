import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({loggedIn, onSignOut}) {
    const { email, name } = useContext(CurrentUserContext);

    return (
        <main className="content">
             <Header loggedIn={loggedIn}/>
        <section className="profile">
            <div className="profile__container">
                <p className="hello">Привет, {name}!</p>
                <ul className="profile__list">
                    <li className="profile__item">
                        <p className="profile__text">
                            Имя
                        </p>
                        <p className="profile__text">
                            {name}
                        </p>
                    </li>
                    <li className="profile__item">
                        <p className="profile__text">
                            E-mail
                        </p>
                        <p className="profile__text">
                            {email}
                        </p>
                    </li>
                </ul>
                <NavLink to="/edit-profile"  className="profile__link-edit btn-opacity-change">Редактировать</NavLink>
                <NavLink onClick={onSignOut} to="/" className="profile__link-exit btn-opacity-change">Выйти из аккаунта</NavLink>
            </div>

        </section>
        </main>
    )

}

export default Profile;