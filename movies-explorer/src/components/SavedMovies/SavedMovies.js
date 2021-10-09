import React from 'react';
import Header from '../Header/Header'
import SearchForm from '../Movies/SearchForm/SearchForm'
import CardList from './SavedMoviesCardList/SavedMoviesCardList'


function SavedMovies(props) {

    return (
        <main className="content">
            <Header />
            <SearchForm />
            <section className="cards">
                <div className="section__container">
                    <CardList />
                </div>
            </section>
        </main >
    )

}

export default SavedMovies;