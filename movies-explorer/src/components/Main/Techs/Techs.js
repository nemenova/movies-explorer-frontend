
import React from 'react';

function Techs(props) {

    return (
        <section className="technologies">
            <div className="section__container">
                <h2 className="section__title">Технологии</h2>
                <h3 className="section__subtitle subtitle_place_tech">7 технологий</h3>
                <p className="section__capture centered-capture">На курсе веб-разработки мы освоили технологии, которые
                    применили
                    в дипломном проекте.</p>
                <ul className="tech__list">
                    <li>
                        <p className="tech__item">
                            HTML
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            CSS
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            JS
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            React
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            Git
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            Express.js
                        </p>
                    </li>
                    <li>
                        <p className="tech__item">
                            mongoDB
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )

}

export default Techs;

