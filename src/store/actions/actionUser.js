import {url} from "../../constant/url";

export const loginHandler = (payload) => {
    return (dispatch) => {
        return fetch(url + "/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then(data => {
                localStorage.setItem('access_token', data.access_token)
            })
    }
}
export const registerHandler = (payload) => {
    return (dispatch) => {
        return fetch(url + "/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then(data => localStorage.setItem('access_token', data.access_token))
    }
}