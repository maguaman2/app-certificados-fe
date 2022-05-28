import {URL_API} from '../constants/urlApi'

const loginAdmin = async (user) => {
   
    const resp = await fetch(`${URL_API}/login/auth`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return {status: resp.status, body: await resp.json()}
}


export {
    loginAdmin
    
}
