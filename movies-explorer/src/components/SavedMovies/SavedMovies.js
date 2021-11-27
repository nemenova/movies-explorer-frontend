import React from 'react';
import Header from '../Header/Header'
import { Suspense } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm'
import CardList from './SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import { shortDuration } from '../../utils/constants';


function SavedMovies({ loggedIn, isErrorOccured, isLoading, movies, onSearch, isEmpty, onDelete }) {
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
        (
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
                                <CardList content={isShortChecked ? shortCards : movies} onDelete={onDelete} />
                            </section>
                    }
                </main >
                <Footer />
            </Suspense>
        )
    )

}

export default SavedMovies;