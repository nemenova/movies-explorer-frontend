import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer">
            <div class="section__container">
                <span class="footer__credits">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </span>
                <div class="footer__text">
                    <p class="footer__copyright">&copy; {new Date().getFullYear()}</p>
                    <address class="footer__links">
                        <Link to="/https://practicum.yandex.ru/" class="footer__link">Яндекс.Практикум</Link>
                        <Link to="/https://github.com/" class="footer__link">Github</Link>
                        <Link to="/https://www.facebook.com/" class="footer__link">Facebook</Link>
                    </address>
                </div>
            </div>
        </footer>
    )

}
export default Footer;

