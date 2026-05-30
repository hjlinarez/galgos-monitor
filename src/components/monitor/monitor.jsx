
import { Link } from "react-router-dom";

import Img_galgos from "./img/galgos.jpg";
import Img_ruleta from "./img/ruleta.jpg";
import Img_gallos from "./img/gallos.jpg";
import Img_keno from "./img/keno.png";
import Logo_keskplay from "../../img/logo_keskplay.png";


import "./monitor.css";

const cerrarSession = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      localStorage.removeItem('user');
        localStorage.removeItem('token');
      window.location.href = "/login";
    }
  }

export default function Monitor(){
    return (

        
        <>
        <div id="div_principal">
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <h1>Seleccione Monitor</h1>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="card">
                            
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h1>Galgos</h1>
                                        <Link to="/galgos"><img src={ Img_galgos} alt="Ir a Monitor" width="100%" className="img-thumbnail" /></Link>
                                    </div>
                                
                                    <div className="col d-none">
                                        <Link to="/keno"><img src={ Img_keno} alt="Ir a Monitor" width="100%" className="img-thumbnail" /></Link>
                                    </div>

                                    <div className="col d-none">
                                        <Link to="/gallos"><img src={ Img_gallos} alt="Ir a Monitor" width="100%" className="img-thumbnail" /></Link>
                                    </div>

                                    <div className="col">
                                        <h1>Ruleta</h1>
                                        <Link to="/ruleta"><img src={ Img_ruleta} alt="Ir a Monitor" width="100%" className="img-thumbnail" /></Link>
                                    </div>
                                </div>
                                

                                    
                            </div>
                            <div className="card-footer monitor-card-footer">
                                <button className="btn btn-danger" onClick={() => cerrarSession()}>Salir</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}