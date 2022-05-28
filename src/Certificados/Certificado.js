
import './Certificado.css'
import { Link } from "react-router-dom";



function Certificado({ itemCertificado }) {

    return (
        <div className="certificado">
            <div className="certificado-container">
                <div className="certificado-item">
                <Link to={`/detalle/${itemCertificado.id}`} className="link">
                    <p>
                        <span>{itemCertificado.curso} </span>
                        <span>{itemCertificado.nombres} </span>
                    </p>
                    </Link>
                </div>
            </div>
        </div>












    );

}
export default Certificado
