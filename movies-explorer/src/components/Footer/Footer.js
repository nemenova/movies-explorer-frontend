import React from 'react';

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
                        <a href="https://practicum.yandex.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link btn-opacity-change">Яндекс.Практикум</a>
                        <a href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link btn-opacity-change">Github</a>
                        <a href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link btn-opacity-change">Facebook</a>
                    </address>
                </div>
            </div>
        </footer>
    )

}
export default Footer;

