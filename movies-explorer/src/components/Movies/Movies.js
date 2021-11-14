import React from 'react';
import { Suspense } from 'react';
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import CardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Movies({ loggedIn, isErrorOccured, isLoading, movies, onSearch, isSaved, isEmpty, onSave, savedMoviesId }) {

    function handleSearch(keyWord) {
        onSearch(keyWord);
    }

    return (
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
                            <CardList content={movies} isSaved={isSaved} onSave={onSave} savedMoviesId={savedMoviesId}/>
                            <button className="cards__more btn-opacity-change">Ещё</button>
                        </section>
                }
            </main >
            <Footer />
        </Suspense>
    )

}

export default Movies;
