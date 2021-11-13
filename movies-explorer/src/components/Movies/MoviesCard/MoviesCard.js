import React from 'react';
import { HourDuration } from '../../../utils/constants';


function MoviesCard({ content, isSaved, onSave }) {
console.log(isSaved)

function handleSaveClick() {
    onSave(content)
}

    const hours = Math.trunc(content.duration / HourDuration);
    const minutes = content.duration % HourDuration;
    const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
        }`;
    return (
        <>
            <li className="card">
                
                <div className="card-btn">
                    {isSaved ? <button className="card__saved btn-opacity-change"></button>
                        :
                        <button onClick={handleSaveClick} className="card__save-btn btn-opacity-change">Сохранить</button>
                    }
                </div>
                <img src={`https://api.nomoreparties.co${content.image.url}`} alt={content.nameRU} className="card__image" />
                <div className="card__content">
                    <h4 className="card__title">{content.nameRU}</h4>
                    <span className="card__duration">{time}</span>
                </div>
            </li>
        </>
    )

}

export default MoviesCard;