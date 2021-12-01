import React from 'react';


function Portfolio() {

    return (
        <>
            <span className="portfolio">
                Портфолио
            </span>
            <ul className="portfolio__list">
                <li>
                    <a href="https://github.com/nemenova"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__item btn-opacity-change">
                        Статичный сайт
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nemenova"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__item btn-opacity-change">
                        Адаптивный сайт
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nemenova"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__item btn-opacity-change">
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </>
    )

}

export default Portfolio;