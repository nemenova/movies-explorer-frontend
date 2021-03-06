import React from 'react';
import Portfolio from '../Portfolio/Portfolio'
import StudentAvatar from '../../../images/studentPhoto.png'

function Student() {

    return (
        <section className="student">
            <div className="section__container">
                <h2 className="section__title">Студент</h2>
                <div className="student__container">
                    <div className="student__info">

                        <h3 className="section__subtitle subtitle_place_student">Виталий</h3>
                        <p className="student__about">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="section__capture capture_place_student">Я родился и живу в Саратове, закончил
                            факультет
                            экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                            работал в
                            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                            фриланс-заказами и ушёл с постоянной работы.</p>
                        <address className="student__social-media">
                            <a href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="student__social-media-link btn-opacity-change">Facebook</a>
                            <a href="https://github.com/nemenova"
                                target="_blank"
                                rel="noreferrer"
                                className="student__social-media-link btn-opacity-change">Github</a>
                        </address>
                    </div>
                    <img src={StudentAvatar} alt="фото" className="student__avatar" />
                </div>
                <Portfolio />
            </div>
        </section>
    )

}

export default Student;
