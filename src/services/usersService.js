import { config } from '../config'

export const register = async (userData) => {
    try {
        const response = await fetch(`${config.URL}/register`, {
            method: "POST",
            body: userData,
            mode: 'cors'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const getLogin = async () => {
    try {
        const response = await fetch(`${config.URL}/login`, {
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const login = async (userData) => {
    try {
        const response = await fetch(`${config.URL}/login`, {
            method: "POST",
            body: userData,
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const logout = async () => {
    try {
        const response = await fetch(`${config.URL}/logout`, {
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error: " + error)
    }
}