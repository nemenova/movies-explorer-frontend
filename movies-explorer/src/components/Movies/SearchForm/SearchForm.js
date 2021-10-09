import React from 'react';



function Search(props) {
    

    return (
        <section className="search">
            <div className="search__block-container">
                <div className="search__container">
                    <form className="search__form">
                        <fieldset className="search__form">
                            <input type="search" name="q" placeholder="Фильм" className="search__input" />
                            <input type="submit" value=" " className="search__submit btn-opacity-change" />
                            <div className="checkbox__container">
                                <label className="checkbox__label">
                                    <input type="checkbox" className="checkbox" />
                                    <div className="checkbox__knobs"></div>
                                    <div className="checkbox__layer"></div>

                                </label>
                                <span className="checkbox__option">Короткометражки</span>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section >
    )

}

export default Search;

