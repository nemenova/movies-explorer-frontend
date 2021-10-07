import React from 'react';
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import CardList from './MoviesCardList/MoviesCardList'


function Movies(props) {
   

    return (
        <section className="cards">
        <div className="section__container">
            <Header />
            <SearchForm />
            <CardList />
            <button className="cards__more">Ещё</button>
        </div>
    </section>
    )

}

export default Movies;
