class Api {
    constructor(options) {
        this._address = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`${res.status}`);
    }
    getMovies() {
        return fetch(`${this._address}/movies`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(this._checkResponse)
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            credentials: 'include',

        })
            .then(this._checkResponse)
    }
    changeUserInfo(user) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: user.name,
                email: user.email
            })

        }).then(this._checkResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',

        }).then(this._checkResponse)
    }

    saveMovie(movie) {
        return fetch(`${this._address}/movies`, {
            headers: this._headers,
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({
                country: movie.country || 'null',
                director: movie.director || 'null',
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink || 'https://www.youtube.com',
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id.toString(),
                nameRU: movie.nameRU,
                nameEN: movie.nameEN || 'null',
            }),
        }).then(this._checkResponse)
    }
}
const api = new Api({
    // backend.nemenova.nomoredomains.club
    //localhost:3000
    baseUrl: 'https://backend.nemenova.nomoredomains.club',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default api;