import React from 'react';
import Header from '../Header/Header'
import { Suspense } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm'
import CardList from './SavedMoviesCardList/SavedMoviesCardList'
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function SavedMovies({ loggedIn, isErrorOccured, isLoading, movies, onSearch, isEmpty, onDelete }) {
    function handleSearch(keyWord) {
        onSearch(keyWord);
    }
    // const [isSaved, setIsSaved] = React.useState(false);
    // const currentUser = React.useContext(CurrentUserContext);
    // setIsSaved(movies.owner.some(i => i === currentUser._id));
    return (
        (
            <Suspense fallback={<Preloader />}>
                <main className="content">
                    <Header loggedIn={loggedIn} />
                    <SearchForm onSearch={handleSearch} />
                    {isLoading ? <Preloader /> : null}
                    {isErrorOccured ? <span className="welcome__error">Во время запроса произошла ошибка. Возможно, проблема с соединением
                        или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
                        : isEmpty ?
                            <section className="cards">
                                <span className="welcome__error">Ничего не найдено</span>
                            </section>
                            :
                            <section className="cards">
                                <CardList content={movies} onDelete={onDelete} />
                                <button className="cards__more btn-opacity-change">Ещё</button>
                            </section>
                    }
                </main >
                <Footer />
            </Suspense>
        )
    )

}

export default SavedMovies;