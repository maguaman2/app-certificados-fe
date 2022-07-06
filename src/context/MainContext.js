import React, { useState } from "react";
const MainContext = React.createContext();

function MainProvider (props) {

    const [openModal , setOpenModal]=useState(false);
    const [certificadoId, setCertificadoId]=useState("");

  

    return(
        <MainContext.Provider value = {{
            openModal,setOpenModal,certificadoId,setCertificadoId
        }} >
            {props.children}
        </MainContext.Provider>
    )
    
}

export{MainContext, MainProvider}