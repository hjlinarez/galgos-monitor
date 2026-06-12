import LastResult from "./lastresult.jsx";
import styles from './ruleta.module.css';

function footerRuleta({ sorteo, urlApi }) {
    return (
        <>


            
                <div className={`${styles.footer_principal}`}>
                    <div className="row">
                        <div className="col-lg-4">
                            <LastResult sorteo={sorteo} urlApi={urlApi} />
                        </div>
                        <div className="col-lg-4">
                            
                        </div>

                        <div className="col-lg-4">
                            <LastResult sorteo={sorteo} urlApi={urlApi} />
                        </div>
                        

                    </div>
                </div>
            


        </>
    );
}
export default footerRuleta;