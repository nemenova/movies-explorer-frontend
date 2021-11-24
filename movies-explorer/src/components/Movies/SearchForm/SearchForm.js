import React from 'react';
import { useState } from 'react';
import useFormWithValidation from '../../../utils/useFormValidation';


function Search({ onSearch, onShortSearch }) {
  const [isChecked, setIsChecked] = React.useState(false);

    const { values, handleChange, errors, isValid } = useFormWithValidation({
        key: '',
      });
      const [searchError, setSearchError] = useState('');
    
      function handleSearchSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
          setSearchError('');
          onSearch(values.key);
        } else if (values.key.length < 1) {
          setSearchError('Нужно ввести ключевое слово');
        } else {
          setSearchError(errors.key);
        }
      }
      function handleShortSearch() {
        setIsChecked(!isChecked)
        onShortSearch(!isChecked);

      }

    return (
        <section className="search">
            <div className="search__block-container">
                <div className="search__container">
                    <form className="search__form" onSubmit={handleSearchSubmit}>
                        <fieldset className="search__form">
                            <input onChange={handleChange} value={values.key} type="search" name="key" placeholder="Фильм" className="search__input" autoComplete="off" required />
                            <input type="submit" value=" " className="search__submit btn-opacity-change" />
                            <div className="checkbox__container">
                                <label className="checkbox__label">
                                    <input type="checkbox" className="checkbox" defaultChecked={false} onChange={handleShortSearch} />
                                    <div className="checkbox__knobs"></div>
                                    <div className="checkbox__layer"></div>

                                </label>
                                <span className="checkbox__option">Короткометражки</span>
                            </div>
                        </fieldset>
                    </form>
                    <span className="welcome__error">{searchError}</span>
                </div>
                
            </div>
        </section >
    )

}

export default Search;

