import React, {useEffect, useState} from 'react'
import './TableUsers.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FiSearch } from "react-icons/fi";


const TableUsers = () => {

    const [users,setUsers]=useState([]);

    const URLUser='http://localhost:3000/user';

    const peticionGet= async()=>{
        const response= await fetch(URLUser)
        const data= await response.json();
        setUsers(data) 
    }
    

    useEffect(()=>{
        peticionGet();
    },[])

  return (
    <div>
        <h1 className='title_emergencias'>Usuarios Registrados</h1>
        <div className='contenedor_buscador'>
            <div className='contedor_search'>
                <FiSearch  className='icon_search'/>
                <input className='btn_search' type="search" name="" id="" placeholder='Buscar'/>
            </div>
        </div>
        <div>
            <table className='tabla_usuarios'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Fecha de Registro</th>
                        <th>Inicio de Sesion</th>
                        <th>Estado del Usuario </th>
                        <th>Estado de Cuenta</th>
                        <th>Fecha de Bloqueo</th>
                        <th>Token</th>
                        <th>Fecha del Token</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.ID_Usuario}>
                        <td>{user.ID_Usuario}</td>
                        <td>{user.nombre}</td>
                        <td>{user.apellidoP}</td>
                        <td>{user.apellidoM}</td>
                        <td>{user.fecha_Registro}</td>
                        <td>{user.fecha_Sesion}</td>
                        <td>{user.estado_Usuario}</td>
                        <td>{user.estado_Cuenta}</td>
                        <td>{user.fecha_bloqueo}</td>
                        <td>{user.token}</td>
                        <td>{user.fecha_token}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                Previous
                </a>
                <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">1</span> a <span className="font-medium">10</span> de{' '}
                    <span className="font-medium">97</span> Registros
                </p>
                </div>
                <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                    <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    1
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    2
                    </a>
                    <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                    3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                    </span>
                    <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                    8
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    9
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    10
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TableUsers
