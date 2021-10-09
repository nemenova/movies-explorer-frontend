import React from 'react';
import Card from '../SavedMoviesCard/SavedMoviesCard'


function SavedMoviesCardList(props) {

    return (
        <section className="cards">
                <ul className="cards__list">
                    <Card />
                </ul>
        </section>
    )

}

export default SavedMoviesCardList;
