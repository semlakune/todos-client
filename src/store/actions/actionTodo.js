import {TASK_ALL_FETCH, TASK_FETCH_SUCCESS} from "./actionType";
import {url} from "../../constant/url";

export const tasksFetch = (payload) => {
    return { type: TASK_FETCH_SUCCESS, payload }
}

export const allTaskFetch = (payload) => {
    return { type: TASK_ALL_FETCH, payload }
}


//thunk action

export const fetchTasks = (payload) => {
    return (dispatch) => {
        return fetch(url + "/todos/" + payload, {
            headers: {
                'access_token': localStorage.access_token, 'Content-Type': 'x-www-form-urlencoded',
            }
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then((data) => {
                dispatch(tasksFetch(data))
            })
    }
}

export const fetchAllTask = () => {
    return (dispatch) => {
        return fetch(url + "/todos", {
            headers: {
                'access_token': localStorage.access_token, 'Content-Type': 'x-www-form-urlencoded',
            }
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then((data) => {
                dispatch(allTaskFetch(data))
            })
    }
}

export const updateTask = (payload) => {
    return (dispatch) => {
        return fetch(url + "/todos/" + payload.id, {
            method: "PATCH",
            headers: { 'access_token': localStorage.access_token, 'Content-Type': 'application/json', },
            body: JSON.stringify({status: payload.status})
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
    }
}

export const addTask = (payload) => {
    return (dispatch) => {
        return fetch(url + "/todos", {
            method: "POST",
            headers: { 'access_token': localStorage.access_token, 'Content-Type': 'application/json', },
            body: JSON.stringify(payload)
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
    }
}