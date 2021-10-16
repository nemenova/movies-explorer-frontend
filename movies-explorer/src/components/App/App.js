import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import * as Auth from '../../utils/Auth';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true);
  const history = useHistory();

  function handleRegister(password, email) {
    Auth.register(password, email)
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
      })
    }
    function handleSignOut() {
      Auth.signOut()
        .then(() => {
          setLoggedIn(false);
          history.push('/signin');
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }

    function handleSignIn(password, email) {
      Auth.authorize(password, email)
        .then(() => {
          setLoggedIn(true)
          history.push('/');

        })
        .catch((err) => {

          console.log(err)
        })
    }




    return (

      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} onSignOut={handleSignOut} />
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
            <Register onRegister={handleRegister} />
          </ Route>
          <Route path="/signin">
            <Login onLogin={handleSignIn} />
          </ Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>


      </CurrentUserContext.Provider>
    );
  }

  export default App;
