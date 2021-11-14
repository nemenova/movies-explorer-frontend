import React from 'react';
import { HourDuration } from '../../../utils/constants';


function MoviesCardSaved({ content, isSaved, onDelete }) {
    function handleDeleteClick() {
        onDelete(content)
    }
    const hours = Math.trunc(content.duration / HourDuration);
    const minutes = content.duration % HourDuration;
    const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
        }`;
    return (
        <>

            <li className="card">
                <a
                    href={content.trailer.startsWith('https') ? content.trailer : 'https://www.youtube.com'}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="card-btn">
                        <button onClick={handleDeleteClick} className="card__delete-btn"></button>
                    </div>
                    <img src={content.image} alt={content.nameRU} className="card__image" />
                </a>
                <div className="card__content">
                    <h4 className="card__title">{content.nameRU}</h4>
                    <span className="card__duration">{time}</span>
                </div>
            </li>

        </>
    )

}

export default MoviesCardSaved;
