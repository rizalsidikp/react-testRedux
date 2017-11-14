import {
    SET_TITLE
} from './constants'

import { fromJS } from 'immutable'

const initialState = fromJS({
    title: ''
})

function HomeReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TITLE :
            return state.set('title', action.payload)
        default:
            return state
    }
}

export default HomeReducer