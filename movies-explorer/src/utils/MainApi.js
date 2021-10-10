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
            headers: this._headers,
            credentials: 'include',
        })
            .then(this._checkResponse)
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers,
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
    // addNewCard(card) {
    //     return fetch(`${this._address}/cards`, {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: card.name,
    //             link: card.link
    //         })

    //     }).then(this._checkResponse)
    // }
    // changeProfilePhoto(data) {
    //     return fetch(`${this._address}/users/me/avatar`, {
    //         method: 'PATCH',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             avatar: data.avatar
    //         })

    //     }).then(this._checkResponse)
    // }
    deleteMovie(movieId) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',

        }).then(this._checkResponse)
    }

    changeSaveMovieStatus(id, isSaved) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            headers: this._headers,
            method: isSaved ? "DELETE" : "PUT",
            credentials: 'include',

        }).then(this._checkResponse)
    }
}
const api = new Api({
    baseUrl: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
      },
})
export default api;