import {URL_API} from '../constants/urlApi'

const getListCertificados = async () => {
    const response = await fetch(`${URL_API}/certificado`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const searchCertificado = async (cedula) => {
    const response = await fetch(`${URL_API}/certificado/cedula/${cedula}`);  
    const data = await response.json();     
    return  data;
}

const getCertificadoById = async (id) => {
    const response = await fetch(`${URL_API}/certificado/id/${id}`);  
    const data = await response.json();     
    return  data;
}

const createCertificado = async (certificado,token) => {
    console.log(certificado);
    console.log(token);
	const resp = await fetch(`${URL_API}/certificado/`, {
        method: 'POST',
        body: JSON.stringify(certificado),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'authorization': token.replace('token=','Bearer '),
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateCertificado = async (certificado,token) => {  
    console.log('Guardando ...')  
    const resp = await fetch(`${URL_API}/certificado`, {
        method: 'PUT',
        body: JSON.stringify(certificado),
        
        headers: {
            'Access-Control-Allow-Origin':'*',
            'authorization': token.replace('token=','Bearer '),
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    getListCertificados,
    createCertificado,
    updateCertificado,
    searchCertificado,
    getCertificadoById,
    
}
