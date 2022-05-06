const urlCrud = 'http://localhost:8081';

const loginAdmin = async (user) => {
   
    const resp = await fetch(`${urlCrud}/login/auth`, {
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