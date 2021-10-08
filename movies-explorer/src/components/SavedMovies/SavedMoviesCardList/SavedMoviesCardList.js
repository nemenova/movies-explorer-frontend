import React from 'react';
import Card from '../SavedMoviesCard/SavedMoviesCard'


function SavedMoviesCardList(props) {

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

export default SavedMoviesCardList;
