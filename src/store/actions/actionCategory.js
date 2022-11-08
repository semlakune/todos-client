import {CATEGORY_FETCH_DETAIL, CATEGORY_FETCH_SUCCESS} from "./actionType";
import {url} from "../../constant/url";


export const categoriesFetch = (payload) => {
    return { type: CATEGORY_FETCH_SUCCESS, payload }
}

export const categoryDetail = (payload) => {
    return { type: CATEGORY_FETCH_DETAIL, payload }
}

// dispatcher

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