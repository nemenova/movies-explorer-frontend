import React from 'react';
import cardImg from '../../../images/cardImage.png'


function MoviesCard(props) {

    return (
        <li className="card">
            <button className="card__saved"></button>
            <div className="card-btn">
                <button className="card__save-btn">Сохранить</button>
            </div>
            <img src={cardImg} alt="" className="card__image" />
            <div className ="card__content">
            <h4 className ="card__title">33 слова о дизайне</h4>
            <span className ="card__duration">1ч 17м</span>
            </div>
        </li>
    )

}

export default MoviesCard;


