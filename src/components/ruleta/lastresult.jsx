import React, { useState, useEffect } from "react";
import styles from './ruleta.module.css';



function getColor(numero) {
  const rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  const verdes = [0]; // si incluyes el 0 como verde

  if (verdes.includes(numero)) return "btn-success";
  if (rojos.includes(numero)) return "btn-danger";
  return "btn-dark"; // negro
}


function Lastresult({ sorteo }) {


  return (
    <>

      <div className={`card ${styles.borde_dorado}`}>
        
      <div className="card-header p-0 m-0"><h3 className="text-white p-0">Ultimos resultados</h3></div>
        <div className="card-body p-0 m-0">
                  
        <div className="d-flex justify-content-center gap-3 w-100 p-0" role="group">
          {sorteo.ultimos_resultados?.map((item, index) => (
            <div
              key={index}
              className={`${getColor(item.numero)} d-flex align-items-center justify-content-center rounded-circle text-white fs-3 fw-bold`}
              style={{ 
                width: '50px', 
                height: '50px',
                minWidth: '50px',
                borderTop: '3px solid rgba(255, 255, 255, 0.4)',  // Brillo arriba
                borderLeft: '3px solid rgba(255, 255, 255, 0.4)', // Brillo a la izquierda
                borderBottom: '4px solid rgba(0, 0, 0, 0.3)',     // Sombra abajo (más gruesa)
                borderRight: '4px solid rgba(0, 0, 0, 0.3)',      // Sombra a la derecha
                boxShadow: 'inset 2px 2px 3px rgba(255, 255, 255, 0.2)' // Brillo interno extra
              }}
            >
              <span>{item.numero}</span>
            </div>
            ))}
        </div>
        </div>

        </div>
      



    </>
  );
}

export default Lastresult;


