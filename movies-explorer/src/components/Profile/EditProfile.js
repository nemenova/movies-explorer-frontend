import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidation from '../../utils/useFormValidation';


function EditProfile({ onEditProfile, loggedIn, isError, isSuccess }) {
    const { email, name } = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid } = useFormValidation({
        name,
        email,
    });
    const [isUpdated, setIsUpdated] = useState(false);

    function onEditSubmit(evt) {
        evt.preventDefault();
        console.log(evt)
        const { email, name } = values;
        onEditProfile({ email, name });
    };



    useEffect(() => {
        if (!(values.name === name) || (!(values.email === email) && isValid)) {
            setIsUpdated(true);
        }

    }, [values.name, values.email, name, email, isValid]);



    return (
        <main className="content">
            <Header loggedIn={loggedIn} />
            <section className="profile">
                <div className="profile__container">
                    <p className="hello">Привет, {name}!</p>

                    <form onSubmit={onEditSubmit} className="welcome__form">
                        <fieldset className="welcome__form">
                            <ul className="profile__list_edit">
                                <li className="profile__item">
                                    <p className="profile__text">
                                        Имя
                                    </p>
                                    <input onChange={handleChange} className="profile__input" type="text" id="name-input" name='name' value={values.name} autoComplete='off' required minLength="2"
                                        maxLength="40" />
                                </li>
                                <span className="welcome__error">{errors.name}</span>
                                <li className="profile__item">
                                    <p className="profile__text">
                                        E-mail
                                    </p>
                                    <input pattern='^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$' onChange={handleChange} className="profile__input" type="email" id="email-input" name='email' value={values.email} autoComplete='off' required minLength="2"
                                        maxLength="40" />
                                </li>
                                <span className="welcome__error">{errors.email}</span>
                            </ul>
                        </fieldset>
                        {isSuccess ? (<span className="profile__success">Ура! Ваш профиль обновлен.</span>) : null}
                        {isError ? (<span className="profile__error">При обновлении профиля произошла ошибка.</span>) : null}
                        <button type='submit' className={`${isValid ? 'welcome__submit-btn btn-opacity-change' : 'welcome__submit-btn_disabled'}`} disabled={!isUpdated && !isValid}>Сохранить</button>
                    </ form>

                </div>

            </section>
        </main>

    )

}

export default EditProfile;


