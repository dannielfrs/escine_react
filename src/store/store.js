import { moviesReducer, messageReducer } from './reducers/moviesReducer'
import { userReducer } from './reducers/usersReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    movies: moviesReducer,
    message: messageReducer,
    user: userReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))