import {CATEGORY_DETAIL, CATEGORY_FETCH_SUCCESS} from "./actionType";
import {url} from "../../constant/url";


export const categoriesFetch = (payload) => {
    return { type: CATEGORY_FETCH_SUCCESS, payload }
}

export const categoryDetail = (payload) => {
    return { type: CATEGORY_DETAIL, payload }
}

// thunk action

export const fetchCategories = () => {
    return (dispatch) => {
        return fetch(url + "/categories", {
            headers: {
                'access_token': localStorage.access_token, 'Content-Type': 'x-www-form-urlencoded',
            }
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then((data) => {
                dispatch(categoriesFetch(data))
            })
    }
}

export const fetchCategoryDetail = (id) => {
    return (dispatch) => {
        return fetch(url + "/categories/" + id, {
            headers: {
                'access_token': localStorage.access_token, 'Content-Type': 'x-www-form-urlencoded',
            }
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then((data) => {
                dispatch(categoryDetail(data))
            })
    }
}

export const addCategory = (payload) => {
    return (dispatch) => {
        return fetch(url + "/categories", {
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

export const deleteCategory = (payload) => {
    return (dispatch) => {
        return fetch(url + "/categories/" + payload, {
            method: "DELETE",
            headers: { 'access_token': localStorage.access_token, 'Content-Type': 'application/json', },
        })
            .then((res) => {
                if (!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
    }
}