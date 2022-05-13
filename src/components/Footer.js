import React from 'react';
import correo from './imgs/correo.png'; // Tell webpack this JS file uses this image
import facebook from './imgs/facebook.png';
import instagram from './imgs/instagram.png';
import marcador from './imgs/marcador.png';
import suda from './imgs/suda.png';
import telefono from './imgs/telefono.png';
import tiktok from './imgs/tiktok.png';
import twitter from './imgs/twitter.png';
import youtube from './imgs/youtube.png';


function Footer() {
  // Import result is the URL of your image
  return ( 
      <div className="footer">
        <img className="pie" src={suda} height="60px" alt='telefono'></img>
        <div className="info">
          <b>

            INFORMACIÓN
          </b>
          <p></p>
          <img className="icon" src={telefono} alt='telefono' height="60px" />
          <p></p>
          <img className="icon" src={correo} alt='correo' height="60px" />
          <p></p>
          <img className="icon" src={marcador} alt='marcador' height="60px" />

        </div>
        <div className="comvi">
          <b>

            Comunidad Virtual

          </b>
          <p></p>
          <a href="https://www.facebook.com/institutosudamericano/" ><img className="icon" src={facebook} alt='telefono'></img></a>
          <a href="https://www.youtube.com/channel/UCR_aVMzyNuV9iwY6DcmakDQ" ><img className="icon" src={youtube} alt='telefono'></img></a>
          <a href="https://twitter.com/itsudamericano" ><img className="icon" src={twitter} alt='telefono'></img></a>
          <a href="https://www.tiktok.com/@itsudamericano?lang=es" ><img className="icon" src={tiktok} alt='telefono'></img></a>
          <a href="https://www.instagram.com/itsudamericano/" ><img className="icon" src={instagram} alt='telefono'></img></a>


        </div>



      </div>

    



  );
}

export default Footer;