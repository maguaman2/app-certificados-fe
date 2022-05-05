const urlCrud = 'http://localhost:8081';

const loginAdmin = async (user) => {
    console.log(user);
    const resp = await fetch(`${urlCrud}/login/auth`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    loginAdmin
    
}