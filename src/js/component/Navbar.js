import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";
import imagen from "../../img/gif2.gif";

const Navbar = () => {
    return (
        <Fragment>
            <div className="numbero off-canvas position-left reveal-for-medium" data-off-canvas data-position="left">
                <div className="numbero row column">
                    <br />
                    <h5>DeNegocios.cl</h5>
                    <br />
                    <ul className="vertical menu" style={{maxWidth: '250px'}}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                        <li><Link to="#">Direccion Tributaria</Link></li>
                        <li><Link to="#">Contabilidad</Link></li>
                        <li><Link to="/Administracion">Administración</Link></li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={imagen} alt="" className="float-right"/>
                </div>
            </div>
            <div className="numbero row column show-for-small-only">
                <br />
                <h5>DeNegocios.cl</h5>
                <br />
                <ul style={{maxWidth: '250px'}}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/GeneradorDocumentos">Generador de Documentos</Link></li>
                    <li><Link to="#">Direccion Tributaria</Link></li>
                    <li><Link to="#">Contabilidad</Link></li>
                    <li><Link to="/Administracion">Administración</Link></li>
                </ul>
            </div>
        </Fragment>
    );
}
 
export default Navbar;