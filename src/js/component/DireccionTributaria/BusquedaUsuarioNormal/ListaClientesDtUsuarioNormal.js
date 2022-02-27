import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../store/AppContext';
import { SaldoTotal } from "../../../Helper/SaldoTotal";
import "../../../../styles/TablaClientes.css";

//Aquí se genera el Listado de Clientes que se muestra en Dt. Desde DireconTributaria.js se ejecuta el action que llama la info de la bd. Esta lista se guarda en store.clientesDt.
// Respecto al CSS del Paginator, se debió crear un .css adicional solo para setear los colores.

const ListaClientesDt = ({ clienteDtBuscado }) => {
    const { store, actions } = useContext(Context);

    //La siguiente funcion despliega la lista de Clientes con sus respectivas Columnas.
    const ListaDesplegarClientes = (objeto, i) => {
        return (
            <tr key={i}>
                <td>{objeto.id}</td>
                <td>{objeto.razon}</td>
                <td>{objeto.rut}</td>
                <td>{objeto.correo}{objeto.correoSecundario === "" ? null
                    : (<span>, {objeto.correoSecundario}</span>)}{objeto.correoTerciario === "" ? null
                        : (<span>, {objeto.correoTerciario}</span>)}</td>
                <td>{objeto.fono}</td>
                <td>{objeto.fechaContratacion}</td>
                <td>{objeto.vigente}</td>
            </tr>
        )
    }

    const Busqueda = (objeto) => {
        if (objeto.razon.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.rut.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.correo.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.correoSecundario.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.correoTerciario.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.fono.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.representante.toLowerCase().includes(clienteDtBuscado.toLowerCase())
            || objeto.rutRepresentante.toLowerCase().includes(clienteDtBuscado.toLowerCase())
        ) {
            return objeto
        }
    }

    return (
        <div className={store.witch ? ("row"): ""}>
            {(store.clientesDt.length != 0) ? (
                <table className={`table hover ${store.witch ? ("tablaClientes"):""}`} id="tblData">
                    <thead>
                        <tr>
                            <th className="id" scope="col">Id</th>
                            <th scope="col">Razon Social</th>
                            <th className="rut" scope="col">Rut</th>
                            <th scope="col">Correo</th>
                            <th className="telefono" scope="col">Teléfono</th>
                            <th className="fecha" scope="col">Fecha</th>
                            <th scope="col">Vigente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(store.clientesDt != null) ? store.clientesDt.map((objeto, i) => ListaDesplegarClientes(objeto, i))
                                : (<td colSpan="9"><h3 className="text-center"> - Tu Busqueda no Arrojó Resultados -</h3></td>)}
                    </tbody>
                </table>
            ) : (<div colSpan="9"><br /><h3 className="text-center"> - Tu Busqueda no Arrojó Resultados -</h3></div>)}
        </div>
    );
}

export default ListaClientesDt;