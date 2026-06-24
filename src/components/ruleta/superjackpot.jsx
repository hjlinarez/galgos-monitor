import React, { useState, useEffect } from "react";
import styles from './ruleta.module.css';

function SuperJackpot({ sorteo }) {

  const [jackpot, setJackpot] = useState({
    mini: 0,
    super: 0,
    mega: 0
  });


  const getJackpot = () => {
    let userid = localStorage.getItem("userId");
    if (userid > 0 && sorteo.idsorteo > 0 && sorteo.segundos > 15) {

      fetch('https://api.keskplay.com/api/ruleta/jackpot/' + userid + '/' + sorteo.idsorteo)
        .then(response => response.json())
        .then((response) => {

          if (response) {

            setJackpot({
              mini: response.mini,
              super: response.super,
              mega: response.mega
            })
          }
        })
    }
  }

  useEffect(() => {
    getJackpot();
    const intervalo = setInterval(() => {
      getJackpot();
    }, 5000); // cada 5 segundos

    return () => clearInterval(intervalo); // limpia el temporizador si el componente se desmonta

  }, [sorteo])

  return (<>
    

    

    <div className={`card ${styles.borde_dorado}`}>
      <div className={`card-header text-center p-0 fs-4 fw-bold ${styles.card_header_jackpot}`}>Super Jackpot</div>
      <div className="card-body p-0 m-0">
        <div className={`${styles.card_body_jackpot}`}>{jackpot.super.toLocaleString("es-VE")}</div>
      </div>
    </div>

   
  </>)
}

export default SuperJackpot