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
import { shortDuration } from '../../utils/constants';

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
  const [movies, setMovies] = React.useState(
    localStorage.getItem('movies')
      ? JSON.parse(localStorage.getItem('movies'))
      : []
  );

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
          setSavedMovies(moviesData.movies);
          setSavedMoviesId(moviesData.movies.map((movie) => movie.nameRU));
        })
        .catch((e) => console.log(e));
    }
    return
  }, [loggedIn]);



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
        console.log(cards)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleShortSearch(checked) {
    console.log(checked)
    // console.log(keyWord)
    if (checked) {
      setIsLoading(true);
      getMovies()
        .then((res) => {
          console.log(res)
          const shortCards = res.filter((movie) => {
            return movie.duration < shortDuration
          });
          // localStorage.setItem('movies', JSON.stringify(shortCards));
          console.log(shortCards)
          setMovies(shortCards);
          if (shortCards.length < 1) {
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

      // const shortCards = movies.filter((movie) => {
      //   return movie.duration < shortDuration
      // });
      // console.log(shortCards)
      // // localStorage.setItem('movies', JSON.stringify(shortCardss));
      // setMovies(shortCards);
    }
    setMovies(JSON.parse(localStorage.getItem('movies')))

  }

  const handleSaveMovie = (movie) => {
    console.log(movie)

    // setIsSaved(movies.owner.some(i => i === currentUser._id));
    api.saveMovie(movie)
      .then((res) => {
        // setIsSaved(true)
        console.log(res)
        localStorage.setItem('savedMovies', JSON.stringify(res));
        // setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
        setSavedMoviesId([...savedMoviesId, res.nameRU]);
        setSavedMovies([...savedMovies, res]);
        // console.log(res)
        // console.log(savedMoviesId)
        // setIsSaved(savedMovies.owner.some(i => i === currentUser._id));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleSavedSearch(keyWord) {

    const cards = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase());
    });
    localStorage.setItem('foundMovies', JSON.stringify(cards));
    console.log(cards)
    setSavedMovies(JSON.parse(localStorage.getItem('foundMovies')));
    if (cards.length < 1) {
      setIsEmpty(true)
    }

    // if (!keyWord || keyWord === " "){
    //   setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    // }
  }
  function handleSavedShortSearch(keyWord) {

    const shortCards = savedMovies.filter((movie) => {
      return movie.duration < shortDuration
    });
    // localStorage.setItem('movies', JSON.stringify(shortCards));
    console.log(shortCards)
    setSavedMovies(shortCards);
    if (shortCards.length < 1) {
      setIsEmpty(true)
    }
  }

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
        localStorage.removeItem('foundMovies');
        localStorage.removeItem('movies');
        setMovies([]);
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
        setIsSuccess(true)
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      })

  };

  function deleteMovie(movie) {
    console.log(movie)
    console.log(movie._id)
    let movieId = savedMovies.filter(
      (f) => f.movieId === movie.id || f.data?.movieId === movie.id
    )[0];
    if (movieId) {
      movieId = movieId._id || movieId._id;
    }
    api.deleteMovie(movie.owner ? movie._id : movieId)
      .then((del) => {
        console.log(del)
        setSavedMovies(savedMovies.filter((film) => film._id !== del._id));
        setSavedMoviesId(savedMoviesId.filter((name) => name !== del.nameRU));
      })
      .catch(err => console.log(err))
  }

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
          savedMoviesId={savedMoviesId}
          onSave={handleSaveMovie}
          onSearch={handleSearch}
          isEmpty={isEmpty}
          onShortSearch={handleShortSearch}
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
          onShortSearch={handleSavedShortSearch}
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
