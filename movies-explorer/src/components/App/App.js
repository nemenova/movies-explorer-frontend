import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import api from '../../utils/MainApi';
import getMovies from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import EditProfile from '../Profile/EditProfile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../Errors/ErrorNotFound'
import Footer from '../Footer/Footer';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as Auth from '../../utils/Auth';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  const [isError, setIsError] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);

  console.log(loggedIn)
debugger
  React.useEffect(() => {
    Auth.checkToken()
      .then((res) => {
        if (res) {
          debugger
          setLoggedIn(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoggedIn(false)
      });
  }, [loggedIn]);

  // const tokenCheck = React.useCallback(() => {
  //   Auth.checkToken()
  //     .then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //       }
  //     })
  //     .catch((e) => {
  //       // history.push('/');
  //       console.log(e);
  //     });
  // }, [history]);

  // React.useEffect(() => {
  //   tokenCheck();
  // }, [tokenCheck]);

  React.useEffect(() => {
    if (loggedIn) {
      debugger
      Promise.all([api.getUserInfo(), api.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
        })
        .catch((e) => console.log(e));
    }
    return
  }, [loggedIn]);

  function handleRegister(password, email, name) {
    Auth.register(password, email, name)
      .then(() => {
        debugger
        history.push('/');
        setLoggedIn(true);
        handleSignIn(password, email)
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
        setLoggedIn(false);
      })
  }
  function handleSignOut() {
    Auth.signOut()
      .then(() => {
        setLoggedIn(false);
        history.push('/');
        setCurrentUser({ email: '', name: '' });
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
        setIsError(err);
        console.log(err)
        setLoggedIn(false);
      })
  }
  function handleUpdateUser(user) {
    api.changeUserInfo(user)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      })

  };



  return (

    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
          <Footer />
        </ Route>
        <ProtectedRoute path="/movies"
        component={Movies}
        >
         
          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/saved-movies"
        component={SavedMovies}
        >
          
          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/profile"
        component={Profile}
        loggedIn={loggedIn}
        onSignOut={handleSignOut}
        >
        </ ProtectedRoute>
        <ProtectedRoute path="/edit-profile"
        component={EditProfile}
        onEditProfile={handleUpdateUser} 
        loggedIn={loggedIn} 
        isError={isError} 
        >
      
        </ ProtectedRoute>
        <Route path="/signup">
          <Register onRegister={handleRegister} isError={isError} />
        </ Route>
        <Route path="/signin">
          <Login onLogin={handleSignIn} isError={isError}/>
        </ Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>


    </CurrentUserContext.Provider>
  );
}

export default App;
