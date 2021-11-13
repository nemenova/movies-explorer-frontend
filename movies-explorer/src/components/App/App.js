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
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [isSaved, setIsSaved] = React.useState(false);
  const [isErrorOccured, setIsErrorOccured] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  console.log(loggedIn)

  React.useEffect(() => {
    Auth.checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('/movies')
        }
      })
      .catch((e) => {
        console.log(e);
        setLoggedIn(false)
      });
  }, [history, loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
        })
        .catch((e) => console.log(e));
    }
    return
  }, [loggedIn]);

  // function filterMovies() {

  // }

  function handleSearch(keyWord) {
    setIsLoading(true);
    // console.log(keyWord)
    getMovies()
      .then((res) => {
        console.log(res)
        const cards = res.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
        });
        localStorage.setItem('movies', JSON.stringify(cards));
        setMovies(JSON.parse(localStorage.getItem('movies')));
      if (cards.length < 1){
        setIsEmpty(true)
      }
      })
      // .then (() => {
      //   const cards = movies.filter((movie) => {
      //     return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
      //   });
      // localStorage.setItem('foundMovies', JSON.stringify(cards));
      // setMovies(JSON.parse(localStorage.getItem('foundMovies')));
      // })
      .catch((e) => {
        console.log(e);
        setIsErrorOccured(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  const handleSaveMovie = (movie) => {
    api.saveMovie(movie)
      .then((res) => {
        setIsSaved(true)
        localStorage.setItem('savedMovies', JSON.stringify(res));
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
        // setSavedMoviesId([...savedMoviesId, movie.id]);
        // setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleRegister(password, email, name) {
    Auth.register(password, email, name)
      .then(() => {
        history.push('/movies');
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
        history.push('/movies');

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
          loggedIn={loggedIn}
          isErrorOccured={isErrorOccured}
          isLoading={isLoading}
          movies={movies}
          onSave={handleSaveMovie}
          onSearch={handleSearch}
          isEmpty={isEmpty}
          isSaved={isSaved}
        >

          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={savedMovies}
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
          <Login onLogin={handleSignIn} isError={isError} />
        </ Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>


    </CurrentUserContext.Provider>
  );
}

export default App;
