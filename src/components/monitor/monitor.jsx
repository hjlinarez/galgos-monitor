import { useState, useRef } from "react";
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

function MonitorCard({ title, to, imgSrc, delayClass }) {
    const cardRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        // Dynamic calculation of angles (maximum tilt of 6 degrees for smooth movement)
        const rX = -(mouseY / (height / 2)) * 6;
        const rY = (mouseX / (width / 2)) * 6;
        
        setTransformStyle(`perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    };

    return (
        <div 
            ref={cardRef}
            className={`monitor-option-card animate-fade-in-up ${delayClass}`}
            style={{
                transform: transformStyle,
                transition: isHovered ? "transform 0.05s ease-out, box-shadow 0.3s ease" : "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="monitor-card-title">{title}</h1>
            <Link to={to}>
                <div className="img-container">
                    <img src={imgSrc} alt={`Ir a ${title}`} className="img-thumbnail" />
                </div>
            </Link>
        </div>
    );
}

export default function Monitor() {
    return (
        <>
            <div id="div_principal">
                <div className="bg-glow bg-glow-1"></div>
                <div className="bg-glow bg-glow-2"></div>
                <div className="bg-glow bg-glow-3"></div>
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="card monitor-glass-card animate-fade-in-up delay-title">
                                <div className="card-body">
                                    <h1 className="monitor-title">Seleccione Monitor</h1>
                                    
                                    <div className="row g-4">
                                        <div className="col-12 col-md-4">
                                            <MonitorCard title="Galgos" to="/galgos" imgSrc={Img_galgos} delayClass="delay-1" />
                                        </div>

                                        <div className="col-12 col-md-4">
                                            <MonitorCard title="Keno" to="/keno" imgSrc={Img_keno} delayClass="delay-2" />
                                        </div>

                                        <div className="col-12 col-md-4">
                                            <MonitorCard title="Ruleta" to="/ruleta" imgSrc={Img_ruleta} delayClass="delay-3" />
                                        </div>

                                        <div className="col d-none">
                                            <Link to="/gallos"><img src={Img_gallos} alt="Ir a Monitor" width="100%" className="img-thumbnail" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer monitor-card-footer d-flex justify-content-end">
                                    <button className="btn btn-danger w-auto" onClick={() => cerrarSession()}>Salir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}