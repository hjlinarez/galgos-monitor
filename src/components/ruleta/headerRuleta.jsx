
import styles from './ruleta.module.css';
import Evento from "./evento.jsx";
import Megajackpot from "./megaJackpot.jsx";
import SuperJackpot from "./superjackpot.jsx";
import MiniJackpot from "./minijackpot.jsx";
function headerRuleta({ sorteo, urlApi, setEjecutarSorteo }) {
    return (
        <>

        <div className="row w-100 p-0 m-0">
            <div className="col-3">                
                <Megajackpot sorteo={sorteo} />
            </div>            
            <div className="col-3">                
                <SuperJackpot sorteo={sorteo} />
            </div>
            <div className="col-3">                
                <MiniJackpot sorteo={sorteo} />
            </div>
            <div className="col-3">
                <Evento sorteo={sorteo} urlApi={urlApi} setEjecutarSorteo={setEjecutarSorteo} />
            </div>
            
        </div>

        
            


        </>
    );
}
export default headerRuleta;