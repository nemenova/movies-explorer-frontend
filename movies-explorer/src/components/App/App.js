import React from 'react';
import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
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
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesId, setSavedMoviesId] = React.useState([]);
  const [isErrorOccured, setIsErrorOccured] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState(localStorage.getItem('movies') ?
    JSON.parse(localStorage.getItem('movies'))
    : []
  );
  // const { path, url } = useRouteMatch();
  const location = useLocation();

  React.useEffect(() => {
    Auth.checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push(location.pathname)
          // window.history.go(-1)

          // window.onpopstate = function(event) {
          //   history.replace(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
          // }
        }
      })
      .catch((e) => {
        console.log(e);
        setLoggedIn(false)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const tokenCheck = React.useCallback(() => {
  //   Auth.checkToken()
  //     .then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //         history.push(location.pathname)
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // React.useEffect(() => {
  //   tokenCheck();
  // }, [tokenCheck]);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData.movies);
          setSavedMoviesId(moviesData.movies.map((movie) => movie.nameRU));
        })
        .catch((e) => console.log(e));
    }
    return
  }, [loggedIn]);


  // general film search
  function handleSearch(keyWord) {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        const cards = res.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
        });
        localStorage.setItem('movies', JSON.stringify(cards));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        if (cards.length < 1) {
          setIsEmpty(true)
        }
      })
      .catch((e) => {
        console.log(e);
        setIsErrorOccured(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // saved films search
  function handleSavedSearch(keyWord) {
    const cards = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
    });
    // localStorage.setItem('foundMovies', JSON.stringify(cards));
    setSavedMovies(cards);
    if (cards.length < 1) {
      setIsEmpty(true)
    }
  }

  // film saving
  const handleSaveMovie = (movie) => {
    api.saveMovie(movie)
      .then((res) => {
        setSavedMoviesId([...savedMoviesId, res.nameRU]);
        setSavedMovies([...savedMovies, res]);
        // localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // facilities
  function handleRegister(password, email, name) {
    Auth.register(password, email, name)
      .then(() => {
        history.push('/movies');
        setLoggedIn(true);
        handleSignIn(password, email)
        console.log(loggedIn)
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);

      })
  }

  function handleSignOut() {
    Auth.signOut()
      .then(() => {
        setLoggedIn(false);
        history.push('/');
        setCurrentUser({ email: '', name: '' });
        // localStorage.removeItem('foundMovies');
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
        setMovies([]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSignIn(password, email) {
    Auth.authorize(password, email)
      .then((res) => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        setIsError(err);
        console.log(err);
        setLoggedIn(false);
      })
  }

  function handleUpdateUser(user) {
    api.changeUserInfo(user)
      .then((data) => {
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      })
  };
 


  // like and dislike movie
  function deleteMovie(movie) {
    let movieId = savedMovies.filter(
      (f) => f.movieId === movie.id || f.data?.movieId === movie.id
    )[0];
    if (movieId) {
      movieId = movieId._id || movieId._id;
    }
    api.deleteMovie(movie.owner ? movie._id : movieId)
      .then((del) => {
        setSavedMovies(savedMovies.filter((film) => film._id !== del._id));
        setSavedMoviesId(savedMoviesId.filter((name) => name !== del.nameRU));
      })
      .catch(err => console.log(err))
  }


  return (

    <CurrentUserContext.Provider value={currentUser}>
      <Switch>

        <ProtectedRoute path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          isErrorOccured={isErrorOccured}
          isLoading={isLoading}
          movies={movies}
          savedMoviesId={savedMoviesId}
          onSave={handleSaveMovie}
          onSearch={handleSearch}
          isEmpty={isEmpty}
          onDelete={deleteMovie}
        >

          <Footer />
        </ ProtectedRoute>
        <ProtectedRoute path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={savedMovies}
          isErrorOccured={isErrorOccured}
          isLoading={isLoading}
          onSearch={handleSavedSearch}
          isEmpty={isEmpty}
          onDelete={deleteMovie}
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
          isSuccess={isSuccess}
        >
        </ ProtectedRoute>
        <Route path="/signup">
          {loggedIn ?
            (<Redirect to='/movies' />)
            :
            (<Register onRegister={handleRegister} isError={isError} />)}
        </ Route>
        <Route path="/signin">
          {loggedIn ?
            (<Redirect to='/movies' />)
            :
            (<Login onLogin={handleSignIn} isError={isError} />)}
        </ Route>
        <Route exact path="/">
          <Main loggedIn={loggedIn} />
          <Footer />
        </ Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>


    </CurrentUserContext.Provider>
  );
}

export default App;
