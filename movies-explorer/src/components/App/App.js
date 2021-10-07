import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    // <CurrentUserContext.Provider>
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </ Route>
        <Route path="/movies">
<Movies />
        </ Route>
        <Route path="/saved-movies">
<SavedMovies />
        </ Route>
        <Route path="/profile">
<Profile />
        </ Route>
        <Route path="/signup">
<Register />
        </ Route>
        <Route path="/signin">
<Login />
        </ Route>
      </Switch>
      <Footer />
</>
  
  );
}

export default App;
