import React from 'react';
import Card from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

    return (
        <ul className="cards__list">
            <Card />
        </ul>
    )
}

export default MoviesCardList;
