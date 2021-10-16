import React from 'react'
import Header from '../Header/Header'
import AboutProject from './AboutProject/AboutProject'
import Promo from './Promo/Promo'
import Student from './Student/Student'
import Techs from './Techs/Techs'


function Main(props) {

    return (
        <main className="content">
            <Header loggedIn={props.loggedIn}/>
            <Promo />
            <AboutProject />
            <Techs />
            <Student />
        </main>
    )
}
export default Main;
