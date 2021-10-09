import React from 'react';
import Header from '../Header/Header'
import SearchForm from './SearchForm/SearchForm'
import CardList from './MoviesCardList/MoviesCardList'


function Movies(props) {


    return (
        <main className="content">
            <Header />
            <SearchForm />
            <section className="cards">
                <CardList />
                <button className="cards__more btn-opacity-change">Ещё</button>
            </section>
        </main >
    )

}

export default Movies;
