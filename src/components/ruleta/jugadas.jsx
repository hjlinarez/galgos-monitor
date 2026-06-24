
import React, { useState, useEffect } from "react";
import styles from './ruleta.module.css';

function Jugadas({ sorteo, urlApi }) {
  return (
    <>

        <div className={`card ${styles.borde_dorado}` }>
        
        
        <div className={`card-header text-center p-0 fs-4 fw-bold ${styles.card_header_jackpot}`}>Jugadas</div>
        <div className="card-body m-0 p-0 text-white fs-6">

          <table className={`p-0 m-0 ${styles.bg_transparent}`} >
            <tbody className="text-white">
              <tr>
                <td className="p-4 align-middle fs-5 fw-bold">Exacto</td>
                <td aling="right" className="align-middle"><span className="btn btn-sm btn-success text-white fs-4">X36</span></td>
              </tr>
              <tr>
                <td className="p-4 align-middle fs-6 fw-bold">Rojo | Negro</td>
                <td aling="right" >
                  <span className="btn  btn-sm bg-danger text-white fs-4">X2</span>
                  <span className="btn  btn-sm bg-black text-white fs-4">X2</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 align-middle fs-6 fw-bold">

                  <p className="p-0 m-0">01-18 | 19-36</p>
                  

                </td>
                <td ><span className="btn  btn-sm btn-success text-white fs-4" >X2</span></td>
              </tr>

              <tr>
                <td className="p-4 align-middle fs-6 fw-bold">
                  <p className="p-0 m-0">01-12 | 13-24</p>
                  <p className="p-0 m-0">25-36</p>
                </td>
                <td className="align-middle"><span className="btn  btn-sm btn-success text-white fs-4" >X3</span></td>
              </tr>

              <tr>
                <td className="p-4 align-middle fs-6 fw-bold">
                  <p className="p-0 m-0">01-06 | 07-12</p>
                  <p className="p-0 m-0">13-18 | 19-24</p>
                  <p className="p-0 m-0">25-30 | 31-36</p>
                </td>
                <td className="align-middle"><span className="btn  btn-sm btn-success text-white fs-4" >X6</span></td>
              </tr>
              <tr>
                <td className="p-4 align-middle fs-5 fw-bold">Par | Impar</td>
                <td ><span className="btn  btn-sm btn-success text-white fs-4" >X2</span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>


    </>
  );
}
export default Jugadas;