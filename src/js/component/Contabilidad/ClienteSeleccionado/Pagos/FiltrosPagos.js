import React, { useState } from 'react';
import { FiAlertOctagon } from "react-icons/fi";

const FiltroPagos = ({ setFiltroYear, setFiltroMesInicio, setFiltroMesTermino, setFiltroSaldo, disabled }) => {
    const [defectFiltroYear, setDefectFiltroYear] = useState("todos");
    const [defectFiltroMesInicio, setDefectFiltroMesInicio] = useState("Desde este mes...");
    const [defectFiltroMesTermino, setDefectFiltroMesTermino] = useState("Hasta este mes...");
    const [defectFiltroSaldo, setDefectFiltroSaldo] = useState("todos");

    const HandlerSeleccionYear = (event) => {
        setFiltroYear(event.target.value);
        setDefectFiltroYear(event.target.value);
    }

    const HandlerSeleccionMesInicio = (event) => {
        setFiltroMesInicio(event.target.value);
        setDefectFiltroMesInicio(event.target.value);
    }

    const HandlerSeleccionMesTermino = (event) => {
        setFiltroMesTermino(event.target.value);
        setDefectFiltroMesTermino(event.target.value);
    }

    const HandlerSeleccionSaldo = (event) => {
        setFiltroSaldo(event.target.value);
        setDefectFiltroSaldo(event.target.value);
    }

    const HandlerResetFiltros = (event) => {
        setDefectFiltroYear("todos");
        setDefectFiltroMesInicio("Desde este mes...");
        setDefectFiltroMesTermino("Hasta este mes...");
        setDefectFiltroSaldo("todos");
        setFiltroYear("todos");
        setFiltroMesInicio("Enero");
        setFiltroMesTermino("Diciembre");
        setFiltroSaldo("todos");
    }

    return (
        <div className='card no-print FiltroDetallePago'>
            <div className="card-divider grid-x grid-margin-x">
                <label className='cell small-3' htmlFor="filtroYear">Selecciona Año
                    <select className="form-select" id="filtroYear" name="filtroYear"
                        disabled={disabled ? true: false}
                        defaultValue={defectFiltroYear} onClick={(e) => HandlerSeleccionYear(e)}>
                        <option value="todos">Desde el inicio de los tiempos...</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </label>
                <label className='cell small-3' htmlFor="filtroMesInicio">Selecciona un Rango
                    <select className="form-select" id="filtroMesInicio" name="filtroMesInicio"
                        disabled={disabled ? true: false}
                        defaultValue={defectFiltroMesInicio} onClick={(e) => HandlerSeleccionMesInicio(e)}>
                        <option>Desde este mes...</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                    <select className="form-select" id="filtroMesTermino" name="filtroMesTermino"
                        disabled={disabled ? true: false}
                        defaultValue={defectFiltroMesTermino} onClick={(e) => HandlerSeleccionMesTermino(e)}>
                        <option>Hasta este mes...</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                </label>
                <label className='cell small-3' htmlFor="filtroSaldo">Selecciona Saldo
                    <select className="form-select" id="filtroSaldo" name="filtroSaldo"
                        disabled={disabled ? true: false}
                        defaultValue={defectFiltroSaldo} onClick={(e) => HandlerSeleccionSaldo(e)}>
                        <option value="todos">Con y Sin Saldos</option>
                        <option value="conSaldo">Con Saldo</option>
                        <option value="sinSaldo">Sin Saldo</option>
                    </select>
                </label>
                {((defectFiltroYear != "todos" || defectFiltroMesInicio != "Desde este mes..." || defectFiltroMesTermino != "Hasta este mes..." || defectFiltroSaldo != "todos")&& !disabled) ? (
                <div className="card-divider align-center cell small-3"><FiAlertOctagon/>&nbsp; &nbsp;Hay Filtros Aplicados <a className="clear button warning align-right" onClick={(e)=>HandlerResetFiltros(e)}>reset filtros</a></div>
            ):null}
            </div>
        </div>
    );
}

export default FiltroPagos;