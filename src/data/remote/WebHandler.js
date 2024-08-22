export const WebHandler = async (url, verb, params, headers) => {
    try {
        let options = {
            method: verb,
            headers: headers,
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