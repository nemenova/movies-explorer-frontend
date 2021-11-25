import React from 'react';
import Card from '../SavedMoviesCard/SavedMoviesCard'
import { desktopWidth, tabletWidth, mobileWidth } from '../../../utils/constants'
import { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';


function SavedMoviesCardList({ content, onDelete }) {

 const [filteredMovies, setFilteredMovies] = useState([]);
    const [windowSize, setWindowSize] = useState(window.innerWidth);


    const moviesCount = useCallback(
        () => {
            if (windowSize >= desktopWidth) return { count: 12, more: 3 };
            if (windowSize >= tabletWidth) return { count: 8, more: 2 };
            if (windowSize >= mobileWidth) return { count: 5, more: 2 };
        },
        [windowSize],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChange = useCallback(
        debounce(() => {
            setWindowSize(window.innerWidth);
        }, 500),
        [windowSize, setWindowSize]
    );

    useEffect(() => {
        const newMovies = content.slice(0, moviesCount().count);
        setFilteredMovies(newMovies);
    }, [content, moviesCount, windowSize])

    useEffect(() => {
        window.addEventListener('resize', onChange);
    }, [onChange]);

    const onMoreButtonClick = () => {
        setFilteredMovies(
            content.slice(0, (filteredMovies.length += moviesCount().more))
        );
    };

    return (
        <>
        <ul className="cards__list">
            {filteredMovies.map((i, movieId) => (
                <Card key={movieId} content={i} onDelete={onDelete} />
            ))}
        </ul>
        {content.length > filteredMovies.length ? (
                <button onClick={onMoreButtonClick} className="cards__more btn-opacity-change">Ещё</button>
            ) : null}
    </>
    )

}

export default SavedMoviesCardList;
