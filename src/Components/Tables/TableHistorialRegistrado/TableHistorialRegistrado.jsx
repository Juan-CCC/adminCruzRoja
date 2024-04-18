import React,{useState,useEffect} from 'react'
import './TableHistorialRegistrado.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const TableHistorialRegistrado = () => {

    const [historial,setHistorial]=useState([]);

    const URLUser='http://localhost:3000/historialMedico';

    const peticionGet= async()=>{
        const response= await fetch(URLUser)
        const data= await response.json();
        setHistorial(data) 
    }
    
    useEffect(()=>{
        peticionGet();
    },[])

  return (
    <div>
      <h1 className='title_emergencias'>Historiales Medicos</h1>
        <div className='contenedor_buscador'>
            <div className='contedor_search'>
                <FiSearch  className='icon_search'/>
                <input className='btn_search' type="search" name="" id="" placeholder='Buscar'/>
            </div>
        </div>
        <div>
            <table className='tabla_emergencias'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Telefono</th>
                        <th>Nombre del Contacto</th>
                        <th>Telefono de Emergencia</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                {historial.map((item) => (
                    <tr key={item.ID_Historial}>
                        <td>{item.ID_Historial}</td>
                        <td>{item.fecha}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido_Paterno}</td>
                        <td>{item.apellido_Materno}</td>
                        <td>{item.telefono}</td>
                        <td>{item.nombre_Contacto}</td>
                        <td>{item.telefono_Contacto}</td>
                        <td>
                            <div className='btn_mostrarH'>
                                <Link className='verMas' to={`/HistorialRegistrado/HistorialCompleto/${item.ID_Historial}`}>Ver completo</Link>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableHistorialRegistrado
