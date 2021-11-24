import React from 'react';
import { HourDuration } from '../../../utils/constants';


function MoviesCard({ content, onSave, savedMoviesId, onDelete }) {
    // console.log(content.trailerLink)
    // console.log(savedMoviesId)
    const handleIsSaved = (card, savedMoviesId) => {
        if (card.nameRU) {
            return savedMoviesId.some((el) => el === card.nameRU);
        }
    };
    const isSaved = handleIsSaved(content, savedMoviesId);

    function handleSaveClick() {
        onSave(content)
    }
    function handleDeleteMovie() {
        onDelete(content);
    }

    const hours = Math.trunc(content.duration / HourDuration);
    const minutes = content.duration % HourDuration;
    const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
        }`;
    return (
        <>
            <li className="card">
                <a
                    href={content.trailerLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={`https://api.nomoreparties.co${content.image.url}`} alt={content.nameRU} className="card__image" />
                    {isSaved ? <button onClick={handleDeleteMovie} className="card__saved btn-opacity-change"></button>
                    :
                    <div className="card-btn">
                        <button onClick={handleSaveClick} className="card__save-btn btn-opacity-change">Сохранить</button>
                    </div>
                }
                </a>
                
                <div className="card__content">
                    <h4 className="card__title">{content.nameRU}</h4>
                    <span className="card__duration">{time}</span>
                </div>
            </li>
        </>
    )

}

export default MoviesCard;