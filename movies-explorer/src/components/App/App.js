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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);







  return (

    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </ Route>
        <ProtectedRoute path="/movies">
          <Movies />
          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/saved-movies">
          <SavedMovies />
          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ ProtectedRoute>
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


    </CurrentUserContext.Provider>
  );
}

export default App;
