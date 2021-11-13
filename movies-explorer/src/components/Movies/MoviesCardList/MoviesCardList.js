import React from 'react';
import Card from '../MoviesCard/MoviesCard'

function MoviesCardList({ content, isSaved, onSave }) {

    return (
        <>
            <ul className="cards__list">
                {content.map((i, movieId) => (
                    <Card key={movieId} content={i} isSaved={isSaved} onSave={onSave} />
                ))}
            </ul>

        </>
    )
}

export default MoviesCardList;
