import React from 'react';
import Card from '../SavedMoviesCard/SavedMoviesCard'


function SavedMoviesCardList(props) {

    return (
        <>
            <ul className="cards__list">
                <Card />
            </ul>
        </>
    )

}

export default SavedMoviesCardList;
