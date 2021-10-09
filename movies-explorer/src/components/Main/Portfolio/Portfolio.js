import React from 'react';
import { Link } from 'react-router-dom';


function Portfolio() {

    return (
        <>
            <span className="portfolio">
                Портфолио
            </span>
            <ul className="portfolio__list">
                <li>
                    <Link to="/https://github.com/nemenova" className="portfolio__item btn-opacity-change">
                        Статичный сайт
                    </Link>
                </li>
                <li>
                    <Link to="/https://github.com/nemenova" className="portfolio__item btn-opacity-change">
                        Адаптивный сайт
                    </Link>
                </li>
                <li>
                    <Link to="/https://github.com/nemenova" className="portfolio__item btn-opacity-change">
                        Одностраничное приложение
                    </Link>
                </li>
            </ul>
        </>
    )

}

export default Portfolio;