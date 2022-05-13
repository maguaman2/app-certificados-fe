import './Footer.css'
import telefono from './Imgs/telefono.png';
import correo from './Imgs/correo.png';
import marcador from './Imgs/marcador.png';



export default function Footer() {

    return (

    <div>
<footer className="footer">
    
    <img className="pie" src="suda.png"  height="60px"></img>
    
    <div className="info">
      <b>

        INFORMACIÓN
      </b>
      <p></p>
      <img className="icon" src={telefono.png} alt='telefono'  height="60px" >(593-7) 283 8323 / 284 3619</img>
      <p></p>
      <img className="icon" src={correo.png} alt='correo'  height="60px" >relpublicaits@sudamericano.edu.ec</img>
      <p></p>
      <img className="icon" src={marcador.png} alt='marcador'  height="60px" >Simón Bolívar y Manuel Vega Esq. Cuenca EC</img>
     
    </div>
    <div className="comvi">
      <b>

        Comunidad Virtual
        
      </b>
      <p></p>
      <a href="https://www.facebook.com/institutosudamericano/" ><img className="icon" src="facebook.png" ></img></a>
      <a href="https://www.youtube.com/channel/UCR_aVMzyNuV9iwY6DcmakDQ" ><img className="icon" src="youtube.png" ></img></a>
      <a href="https://twitter.com/itsudamericano" ><img className="icon" src="twitter.png" ></img></a>
      <a href="https://www.tiktok.com/@itsudamericano?lang=es" ><img className="icon" src="tik-tok.png" ></img></a>
      <a href="https://www.instagram.com/itsudamericano/" ><img className="icon" src="instagram.png" ></img></a>
      

    </div>
    


</footer>

    </div>



    






    );

}