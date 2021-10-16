import React from 'react';
import { useState } from 'react';
import useFormWithValidation from '../../../utils/useFormValidation';


function Search({ handleSubmit }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation({
        key: '',
      });
      const [searchError, setSearchError] = useState('');
    
      function handleSearchSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
          setSearchError('');
          handleSubmit(values.key);
        } else if (values.key.length > 0) {
          setSearchError(errors.key);
        } else {
          setSearchError('Нужно ввести ключевое слово');
        }
      }

    return (
        <section className="search">
            <div className="search__block-container">
            <span className="search__error" id="key-input-error">
        {searchError}
      </span>
                <div className="search__container">
                    <form className="search__form" onSubmit={handleSearchSubmit}>
                        <fieldset className="search__form">
                            <input onChange={handleChange} value={values.key} type="search" name="q" placeholder="Фильм" className="search__input" required/>
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

