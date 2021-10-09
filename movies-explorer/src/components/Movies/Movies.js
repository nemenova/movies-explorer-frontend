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
                {/* <div className="section__container"> */}
                    <CardList />
                    <button className="cards__more">Ещё</button>
                {/* </div> */}
            </section>
        </main >
    )

}

export default Movies;
