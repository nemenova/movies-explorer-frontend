import React from 'react';
import { HourDuration } from '../../../utils/constants';


function MoviesCardSaved({ content, onDelete }) {
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

    const cardSaveBtnClassName = `btn-opacity-change card__delete-btn ${isHovered ? 'card__delete-btn-active' : ''
        }`;


    function handleDeleteClick() {
        onDelete(content)
    }
    const hours = Math.trunc(content.duration / HourDuration);
    const minutes = content.duration % HourDuration;
    const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
        }`;
    return (
        <li className="card">
            <button onClick={handleDeleteClick} className={cardSaveBtnClassName}></button>
            <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} >
                <a
                    href={content.trailer}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={content.image} alt={content.nameRU} className="card__image" />
                </a>
            </div>

            <div className="card__content">
                <h4 className="card__title">{content.nameRU}</h4>
                <span className="card__duration">{time}</span>
            </div>
        </li>
    )
}

export default MoviesCardSaved;
