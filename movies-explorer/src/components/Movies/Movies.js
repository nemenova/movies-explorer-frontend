import React from 'react';
import { Suspense } from 'react';
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import CardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'


function Movies({loggedIn}) {
    // window.onload = function () {
    //     document.querySelector('.preloader').classList.add("preloader-remove");
    // };

    return (
        <Suspense fallback={<Preloader />}>
            <main className="content">
                <Header loggedIn={loggedIn}/>
                <SearchForm />
                <section className="cards">
                    <CardList />
                    <button className="cards__more btn-opacity-change">Ещё</button>
                </section>
            </main >
        </Suspense>
    )

}

export default Movies;
