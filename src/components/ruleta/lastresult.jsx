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

      <div className="card bg-transparent border-0" >
        <div className={`card-header ${styles.bg_warning} fs-4 fw-bold`}>Ultimos resultados</div>
        <div className="card-body p-2 m-0">
          <div className="btn-group btn-group-lg w-100" role="group" >
            {sorteo.ultimos_resultados?.map((item, index) => (
              <button key={index} type="button" className={`btn ${getColor(item.numero)} fs-4 `}><span className="badge text-white p-1">{item.numero}</span></button>
            ))}
          </div>
        </div>
      </div>



    </>
  );
}

export default Lastresult;


