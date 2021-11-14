import React from 'react';
import Card from '../MoviesCard/MoviesCard'

function MoviesCardList({ content, isSaved, onSave, savedMoviesId }) {
    return (
        <>
            <ul className="cards__list">
                {content.map((i, movieId) => (
                    <Card key={movieId} content={i} isSaved={isSaved} onSave={onSave} savedMoviesId={savedMoviesId} />
                ))}
            </ul>

        </>
    )
}

export default MoviesCardList;
