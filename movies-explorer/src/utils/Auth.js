export const BASE_URL = 'http://backend.nemenova.nomoredomains.club';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`${res.status}`);
}

export const register = (password, email, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({ password, email, name })
    })
        .then(checkResponse)
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then(checkResponse)
};

export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
    })
        .then(checkResponse);
}
export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
    })
        .then(checkResponse)
}