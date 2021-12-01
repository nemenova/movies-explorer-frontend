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



    const [isHovered, setIsHovered] = React.useState(false);
    function handleMouseEnter() {
        setIsHovered(true)
    }
    function handleMouseLeave() {
        setIsHovered(false)
    }
    React.useEffect(() => {
        handleMouseEnter()
        console.log(isHovered)
        handleMouseLeave(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cardSaveBtnClassName = `btn-opacity-change card__save-btn ${isHovered ? 'card__save-btn-active' : ''
        }`;


    function handleSaveClick() {
        onSave(content);
    }
    function handleDeleteMovie() {
        onDelete(content);
    }

    const hours = Math.trunc(content.duration / HourDuration);
    const minutes = content.duration % HourDuration;
    const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
        }`;
    return (
        <li className="card">

            {isSaved ? <button onClick={handleDeleteMovie} className="card__saved btn-opacity-change"></button>
                :
                <button onClick={handleSaveClick} className={cardSaveBtnClassName}>Сохранить</button>
            }

            <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} >
                <a
                    href={content.trailerLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={`https://api.nomoreparties.co${content.image.url}`} alt={content.nameRU} className="card__image" />
                </a>
            </div>

            <div className="card__content">
                <h4 className="card__title">{content.nameRU}</h4>
                <span className="card__duration">{time}</span>
            </div>
        </li>
    )

}

export default MoviesCard;