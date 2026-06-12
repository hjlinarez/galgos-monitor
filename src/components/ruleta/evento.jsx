import React, { useState, useEffect } from "react";
import styles from './ruleta.module.css';

function getSegundos(segundos) {    
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(minutos)}:${pad(segundosRestantes)}`;            
}

function Evento({ sorteo, setEjecutarSorteo }) {
    const[tiempo, setTiempo] = useState(sorteo.segundos || 0);
    useEffect(() => {
                    setTiempo(sorteo.segundos || 0);
                    const intervalo = setInterval(() => {
                                                            setTiempo(prev => {
                                                                                if (prev <= 1) {
                                                                                    clearInterval(intervalo);
                                                                                    setTimeout(() => {
                                                                                                        setEjecutarSorteo(true); // ✅ aquí está seguro porque está dentro del flujo asincrónico final
                                                                                                        }, 0);
                                                                                    return 0;
                                                                                    
                                                                                }
                                                                                return prev - 1;
                                                                                });
                                                        }, 1000);
                    return () => clearInterval(intervalo);
                    }, [sorteo, setEjecutarSorteo]);

  return (
            <>
            <div className="card bg-transparent border-1" >
                <div className={styles.bg_warning + " card-header text-center fs-4 fw-bold"}>
                    Sorteo #{sorteo.idsorteo}
                </div>
                <div className="card-body p-1 fs-1 fw-bold text-center text-white">
                    { getSegundos(tiempo) }
                </div>
            </div>
            </>
        );
}

export default Evento;