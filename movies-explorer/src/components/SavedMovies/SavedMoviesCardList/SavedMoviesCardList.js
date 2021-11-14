import React from 'react';
import Card from '../SavedMoviesCard/SavedMoviesCard'


function SavedMoviesCardList({ content, isSaved, onDelete }) {
console.log(content)
    return (
        <>
        <ul className="cards__list">
            {content.map((i, movieId) => (
                <Card key={movieId} content={i} isSaved={isSaved} onDelete={onDelete} />
            ))}
        </ul>

    </>
    )

}

export default SavedMoviesCardList;
