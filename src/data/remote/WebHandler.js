export const WebHandler = async (url, verb, params) => {
    try {
        let options = {
            method: verb,
            headers: {'Content-Type': "application/json"},
            body: params,
            credentials: 'include',
        }
        const data = await fetch(url, options)
        const response = await data.json()
        return response
    } catch (error) {
        return error
    }
}