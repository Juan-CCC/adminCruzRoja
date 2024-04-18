import React,{useState,useEffect} from 'react'
import './TablePersonalRegistrado.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FiSearch } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const TablePersonalRegistrado = () => {

    const [personal,setPersonal]=useState([]);
    const [cargo,setCargo]=useState([]);
    const [selectedCargo, setSelectedCargo] = useState('');
    const [selectedPersonalId, setSelectedPersonalId] = useState('');
    const [selectedPersonal, setSelectedPersonal] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // Nuevo estado para controlar si el modal está abierto o cerrado

    const URLPersonal='http://localhost:3000/personal';
    const URLTipoCargo='http://localhost:3000/tipoCargo';

    useEffect(()=>{
        const fetchData= async()=>{
            const personalResponse= await fetch(URLPersonal)
            const personalData= await personalResponse.json();
            setPersonal(personalData);
            
            const cargoResponse= await fetch(URLTipoCargo)
            const cargoData= await cargoResponse.json();
            setCargo(cargoData);
        };
        fetchData();
    },[])

    useEffect(() => {
        const selected = personal.find(item => item.ID_Asociado === selectedPersonalId);
        setSelectedPersonal(selected);
    }, [selectedPersonalId, personal]);

    const handleCargoChange = (event) => {
        setSelectedCargo(event.target.value);
    };

    const handleEdit = (id) => {
        setSelectedPersonalId(id);
        toggleMenu();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Aquí debes hacer la solicitud HTTP para actualizar el cargo
        try {
            const response = await fetch(`http://localhost:3000/actualizarPersonal/${selectedPersonalId}`, {
                method: 'PUT', // O 'PATCH' según lo que necesite tu API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Id_Cargo: selectedCargo }),
            });
            if (response.ok) {
                
                toggleMenu(); // Cerrar el modal después de actualizar
            } else {
                console.error('Error al actualizar el cargo');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
        }
    };

    function toggleMenu() {
        setModalOpen(!modalOpen); // Cambiar el estado del modal
    }

    /*function toggleMenu() {
        let modalEditar = document.getElementById("modalEditar");
        if (modalEditar) {
          modalEditar.classList.toggle("open-menu");
        } else {
          console.error("No se encontró el elemento modalEditar.");
        }
      }*/

    const atenderCita = async (ID_Asociado, estadoActual) => {
        try {
            // Determina el nuevo estado basado en el estado actual
            const nuevoEstado = estadoActual === 'Activo' ? 'Desactivado' : 'Activo';

            // Realiza la solicitud a la API para actualizar el estado de la cita
            await fetch(`http://localhost:3000/actualizarEstadoPersonal/${ID_Asociado}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado_Usuario: nuevoEstado }), // Cambia 'Atendido' según lo que necesites
            });

            // Una vez que se actualiza la cita en la API, vuelve a cargar las citas para reflejar el cambio
            //cargarCita();
        } catch (error) {
            console.error('Error al actualizar el estado de la cita:', error);
        }
    };

  return (
    <div>
        <h1 className='title_emergencias'>Personal Registrado</h1>
        <div className='contenedor_buscador'>
            <div className='contedor_search'>
                <FiSearch  className='icon_search'/>
                <input className='btn_search' type="search" placeholder='Buscar'/>
            </div>
        </div>
        <div>
            <table className='tabla_personal'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Fecha de Registro</th>
                        <th>Estado del Usuario</th>
                        <th>Estado de Cuenta</th>
                        <th>Cargo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                {personal.map((item) => (
                    <tr key={item.ID_Asociado}>
                        <td>{item.ID_Asociado}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellidoP}</td>
                        <td>{item.apellidoM}</td>
                        <td>{item.fecha_Registro}</td>
                        <td>{item.estado_Usuario}</td>
                        <td>{item.estado_Cuenta}</td>
                        <td>{item.Id_Cargo}</td>
                        <td>
                            <div className='contenedor_btn'>
                                <button className='btn_editar' type="button" onClick={() => handleEdit(item.ID_Asociado)}>Editar</button>
                                <button 
                                    className='btn_eliminar' 
                                    onClick={() => atenderCita(item.ID_Asociado,item.estado_Usuario)}    
                                    type="button">{item.estado_Usuario === 'Activo' ? 'Desactivar' : 'Activar'}
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        
        <div>
            <form className={`modal_editar ${modalOpen ? 'open-menu' : ''}`} id='modalEditar' onSubmit={handleSubmit}>
                {selectedPersonal && (
                    <>
                    <div className='btn_group'>
                        <label htmlFor="">Nombre</label>
                        <input className='input_Modal' type="text" value={selectedPersonal.nombre} readOnly/>
                    </div>
                    <div className='btn_group'>
                        <label htmlFor="">Apellido Paterno</label>
                        <input className='input_Modal' type="text" value={selectedPersonal.apellidoP} readOnly/>
                    </div>
                    <div className='btn_group'>
                        <label htmlFor="">Apellido Materno</label>
                        <input className='input_Modal' type="text" value={selectedPersonal.apellidoM} readOnly/>
                    </div>
                    </>
                )}
                
                <div className='btn_group'>
                    <label htmlFor="">Cargo</label>
                    <select className='input_Modal' value={selectedCargo} onChange={handleCargoChange}>
                        {cargo.map((cargos)=>(
                            <option 
                                key={cargos.Id_Cargo} 
                                value={cargos.Id_Cargo}>{cargos.tipo_Cargo}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='contenedor_enviar'>
                    <div><input className='btn_enviar' type="submit" value="Actualizar" /></div>
                </div>
            </form>
        </div>    
        </div>
        
    </div>
  )
}

export default TablePersonalRegistrado
