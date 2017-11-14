import { createSelector } from 'reselect';

export const selectHome = () => state => state.get('homeReducer')

export const getTitle = () => createSelector(
    selectHome(),
    state => state.get('title')
)