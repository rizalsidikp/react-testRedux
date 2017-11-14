import { combineReducers } from 'redux-immutable'


import HomeReducer from './containers/Home/reducer'


const reducers = combineReducers({
    homeReducer: HomeReducer
});

export default reducers