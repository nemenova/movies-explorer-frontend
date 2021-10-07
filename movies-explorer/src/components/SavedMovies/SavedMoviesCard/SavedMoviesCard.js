import React from 'react';
import cardImg from '../../../images/cardImage.png'


function MoviesCardSaved(props) {

    return (
        <li className="card">
            <div className="card-btn">
            <button class="card__delete-btn"></button>
            </div>
            <img src={cardImg} alt="" className="card__image" />
            <div className ="card__content">
            <h4 className ="card__title">33 слова о дизайне</h4>
            <span className ="card__duration">1ч 17м</span>
            </div>
        </li>
    )

}

export default MoviesCardSaved;