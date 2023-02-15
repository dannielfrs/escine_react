import { getItems, addItem, editItem, deleteItem } from '../../services/moviesService'
import notification from '../../assets/libraries/notification'

// --------------------- ACTION CREATORS --------------------

export const getMovies = () => {
    return async (dispatch) => {
        const data = await getItems()
        console.log(data)
        if (data.isLoggedin) {
            dispatch({
                type: '@movies/get',
                payload: data.movies
            })
        } else {
            dispatch({
                type: '@movies/get',
                payload: []
            })
        }
    }
}

export const addMovie = (item) => {
    return async (dispatch) => {
        const message = await addItem(item)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@movie/add',
            payload: message
        })
    }
}

export const editMovie = (item, itemId) => {
    return async (dispatch) => {
        const message = await editItem(item, itemId)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@movie/edit',
            payload: message
        })
    }
}

export const deleteMovie = (itemId) => {
    return async (dispatch) => {
        const message = await deleteItem(itemId)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@movie/delete',
            payload: message
        })
    }
}