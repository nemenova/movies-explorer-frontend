import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="section__container">
                <span className="footer__credits">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </span>
                <div className="footer__text">
                    <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                    <address className="footer__links">
                        <Link to="/https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</Link>
                        <Link to="/https://github.com/" className="footer__link">Github</Link>
                        <Link to="/https://www.facebook.com/" className="footer__link">Facebook</Link>
                    </address>
                </div>
            </div>
        </footer>
    )

}
export default Footer;

