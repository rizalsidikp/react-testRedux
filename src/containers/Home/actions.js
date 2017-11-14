import {
    SET_TITLE
}
from './constants'

export function setTitle(value){
    return (dispatch) => {
        dispatch({
            type: SET_TITLE,
            payload: value
        })
    }
}