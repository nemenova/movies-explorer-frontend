import React from 'react';
import { Suspense } from 'react';
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import CardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'
import Footer from '../Footer/Footer';
import { shortDuration } from '../../utils/constants';


function Movies({ loggedIn, isErrorOccured, isLoading, movies, onSearch, isEmpty, onSave, savedMoviesId, onDelete }) {
    const [isShortChecked, setIsShortChecked] = React.useState(false);
    const shortCards = movies.filter((movie) => {
        return movie.duration < shortDuration
    });
    function handleSearch(keyWord) {
        onSearch(keyWord);
    }
    function handleShortSearch(isChecked) {
        setIsShortChecked(isChecked)
    }

    React.useEffect(() => {
        if (isShortChecked) {
            handleShortSearch(true)
        }
        return
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShortChecked]);


    return (
        <Suspense fallback={<Preloader />}>
            <main className="content">
                <Header loggedIn={loggedIn} />
                <SearchForm onSearch={handleSearch} onShortSearch={handleShortSearch} />
                {isLoading ? <Preloader /> : null}
                {isErrorOccured ? <span className="welcome__error">Во время запроса произошла ошибка. Возможно, проблема с соединением
                    или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
                    : isEmpty ?
                        <section className="cards">
                            <span className="welcome__error">Ничего не найдено</span>
                        </section>
                        :
                        <section className="cards">
                            <CardList content={isShortChecked ? shortCards : movies}
                                onSave={onSave} savedMoviesId={savedMoviesId} onDelete={onDelete} />
                        </section>
                }
            </main >
            <Footer />
        </Suspense>
    )

}

export default Movies;
