import react from "react";
import {Spinner} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css';

function Loading(){
return (
<div className="divPadre">
    <div className="divHijo">
    <Spinner color="dark" className="spinnerReactstrap"/>
    </div>
</div>

);
}

export default Loading;