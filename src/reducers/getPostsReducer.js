import {INVALID_SUBREDDIT,RECEIVE_POSTS} from '../actions'

export const initialState = [];

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload
        case INVALID_SUBREDDIT:
            return initialState 
        default:
            return state
    }
}  