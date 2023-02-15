import { register, getLogin, login, logout } from '../../services/usersService'
import notification from '../../assets/libraries/notification'

// --------------------- ACTION CREATORS --------------------

export const userRegister = (user) => {
    return async (dispatch) => {
        const message = await register(user)
        console.log(message)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@user/user',
            payload: message
        })
    }
}

export const userGet = () => {
    return async (dispatch) => {
        const message = await getLogin()
        console.log(message)
        dispatch({
            type: '@user/user',
            payload: message
        })
    }
}

export const userLogin = (user) => {
    return async (dispatch) => {
        const message = await login(user)
        console.log(message)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@user/user',
            payload: message
        })
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        const message = await logout()
        console.log(message)
        notification(message.message.content, message.message.type)
        dispatch({
            type: '@user/user',
            payload: message
        })
    }
}