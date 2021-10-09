import React from 'react';
import cardImg from '../../../images/cardImage.png'
import movieList from '../../../utils/moviesList';


function MoviesCard(props) {

    return (
        <>
            {movieList.map((i, index) => (
                <li key={index} className="card">
                    <button className="card__saved btn-opacity-change"></button>
                    <div className="card-btn">
                        <button className="card__save-btn btn-opacity-change">Сохранить</button>
                    </div>
                    <img src={cardImg} alt={i.img.alt} className="card__image" />
                    <div className="card__content">
                        <h4 className="card__title">{i.title}</h4>
                        <span className="card__duration">{i.duration}</span>
                    </div>
                </li>
            ))}
        </>
    )

}

export default MoviesCard;