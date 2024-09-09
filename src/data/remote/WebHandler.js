export const WebHandler = async (url, verb, params) => {
    try {
        let options = {
            method: verb,
            headers: { 'Content-Type': "application/json" },
            body: params,
            credentials: 'include',
        }
        const data = await fetch(url, options)
        const status = data.status
        const response = await data.json()
        return { response, status }
    } catch (error) {
        return error.message
    }
}
// export const WebHandler = async (url, verb, params, withCredentials = false) => {
//     try {
//       let options = {
//         method: verb,
//         headers: { 'Content-Type': "application/json" },
//         body: params,
//       };
  
//       if (withCredentials) {
//         options.credentials = 'include'; // Only include credentials when specified
//       }
  
//       const data = await fetch(url, options);
//       const status = data.status;
//       const response = await data.json();
  
//       return { response, status };
//     } catch (error) {
//       console.error("Error in WebHandler:", error);
//       return { response: error.message, status: 500 };
//     }
//   };