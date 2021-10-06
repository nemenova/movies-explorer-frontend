import React from 'react';
import Card from '../MoviesCard/MoviesCard'
import { NavLink, useLocation } from 'react-router-dom';


function MoviesCardList(props) {
    const location = useLocation();

    return (
        <section className="cards">
            <div className="section__container">
                <ul className="cards__list">
                    <Card />
                </ul>
                <button className="cards__more">Ещё</button>
            </div>
        </section>
    )

}

export default MoviesCardList;
