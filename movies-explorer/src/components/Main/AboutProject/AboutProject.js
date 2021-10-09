import React from 'react';
import Diagram from '../Diagram/Diagram'

function AboutProject() {

    return (
        <section className="about-project">
            <div className="section__container">
                <h2 className="section__title">О проекте</h2>
                <div className="about-project__description">
                    <div className="section__text">
                        <p className="section__paragraph">Дипломный проект включал 5 этапов</p>
                        <p className="section__capture">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.</p>
                    </div>
                    <div className="section__text">
                        <p className="section__paragraph">На выполнение диплома ушло 5 недель</p>
                        <p className="section__capture">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <Diagram />
            </div>
        </section>
    )
}

export default AboutProject;

