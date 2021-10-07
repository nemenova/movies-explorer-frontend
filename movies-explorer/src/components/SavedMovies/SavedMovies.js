import React from 'react';
import Header from '../Header/Header'
import SearchForm from '../Movies/SearchForm/SearchForm'
import CardList from './SavedMoviesCardList/SavedMoviesCardList'


function SavedMovies(props) {
   

    return (
        <section className="cards">
        <div className="section__container">
            <Header />
            <SearchForm />
            <CardList />
        </div>
    </section>
    )

}

export default SavedMovies;