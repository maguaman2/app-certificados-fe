const urlCrud = 'http://190.94.134.20:8081';


const getListCertificados = async () => {
    const response = await fetch(`${urlCrud}/certificado`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const searchCertificado = async (cedula) => {
    const response = await fetch(`${urlCrud}/certificado/cedula/${cedula}`);  
    const data = await response.json();     
    return  data;
}

const getCertificadoById = async (id) => {
    const response = await fetch(`${urlCrud}/certificado/id/${id}`);  
    const data = await response.json();     
    return  data;
}

const createCertificado = async (certificado,token) => {
    console.log(certificado);
    console.log(token);
	const resp = await fetch(`${urlCrud}/certificado/`, {
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
    const resp = await fetch(`${urlCrud}/certificado`, {
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
