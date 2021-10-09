import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../Errors/ErrorNotFound'
import Footer from '../Footer/Footer';

function App() {
  return (
    <>

      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </ Route>
        <Route path="/movies">
          <Movies />
          <Footer />
        </ Route>
        <Route path="/saved-movies">
          <SavedMovies />
          <Footer />
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

    </>

  );
}

export default App;
