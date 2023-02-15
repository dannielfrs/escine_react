import { config } from '../config'

const URL = `${config.URL}/api/movies`

export const getItems = async () => {
    try {
        const response = await fetch(URL, {
            credentials: 'include',
            mode: 'cors'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error in API: " + error)
    }
}

export const addItem = async (item) => {
    try {
        const response = await fetch(`${URL}/add`, {
            method: "POST",
            body: item,
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error in API: " + error)
    }
}

export const editItem = async (item, itemId) => {
    try {
        const response = await fetch(`${URL}/edit/${itemId}`, {
            method: 'POST',
            body: item,
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error in API: " + error)
    }
}

export const deleteItem = async (itemId) => {
    try {
        const response = await fetch(`${URL}/delete/${itemId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error in API: " + error)
    }
}