import React, {useEffect, useState} from 'react'
import './TableUsers.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FiSearch } from "react-icons/fi";


const TableUsers = () => {

    /*const [users, setUsers]= useState([{
        id:'ID_Usuario',apellido:'apellido_Paterno',apellidoM:'apellido_Materno',email:'correo',
        contrasena:'contraseña',telefono:'telefono', registro:'fecha_Registro', inicio:'fecha_Sesion',
        estadoU:'estado_Usuario',estadoC:'estado_Cuenta',bloqueo:'fecha_Bloqueo',token:'token',fechaT:'fecha_Token'

    }])*/
    const [user,setUser]=useState([]);

    const URLUser='https://api-rest-cr.vercel.app/user/';

    const peticionGet= async()=>{
        const response= await fetch(URLUser)
        const data= await response.json();
            console.log(data)
    }

    
    /*const peticionGet= async()=>{
        await fetch(URLUser)
        .then(response=>{response.json()})
        console.log(response)
    }*/
    peticionGet()
    
        
    
    /*useEffect(()=>{
        peticionGet();
    },[])*/
    
    /*const showData= async()=>{
        const response= await fetch(URLUser,
            {
                method: "GET",
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id:'ID_Usuario',
                  nombre: 'nombre',
                  apellido:'apellido_Paterno',
                  apellido_Materno: 'ApellidoM',
                  correo: email,
                  telefono: telefono,
                  contraseña: password
                }),
              }
            )
        const data= await response.json();
        setUsers(data)
    }*/
    
    

    

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
            <table className='tabla_emergencias'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Correo</th>
                        <th>Contraseña</th>
                        <th>Telefono</th>
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
                {userss.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.apellidoM}</td>
                        <td>{item.email}</td>
                        <td>{item.contrasena}</td>
                        <td>{item.telefono}</td>
                        <td>{item.registro}</td>
                        <td>{item.inicio}</td>
                        <td>{item.estadoU}</td>
                        <td>{item.estadoC}</td>
                        <td>{item.registro}</td>
                        <td>{item.bloqueo}</td>
                        <td>{item.token}</td>
                        <td>{item.fechaT}</td>
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