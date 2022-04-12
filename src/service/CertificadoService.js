const urlCrud = 'http://localhost:8081';


const getListCertificados = async () => {
    const response = await fetch(`${urlCrud}/certificado`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const searchCertificado = async (cedula) => {
    const response = await fetch(`${urlCrud}/certificado/${cedula}`);  
    const data = await response.json();     
    return  data;
}

const getCertificadoById = async (id) => {
    const response = await fetch(`${urlCrud}/certificado/id/${id}`);  
    const data = await response.json();     
    return  data;
}

const createCertificado = async (certificado) => {
    console.log(certificado);
    const resp = await fetch(`${urlCrud}/certificado/`, {
        method: 'POST',
        body: JSON.stringify(certificado),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateCertificado = async (certificado) => {
  
    const resp = await fetch(`${urlCrud}/certificado`, {
        method: 'PUT',
        body: JSON.stringify(certificado),
        headers: {
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