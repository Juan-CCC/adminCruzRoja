import React,{useState} from 'react'
import './FormHistorialMedico.css'

const FormHistorialMedico = () => {

  const [paginaActual, setPaginaActual] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    municipio: '',
    colonia: '',
    calle: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    telefono: ''
  });
  const [datosHistorial, setDatosHistorial] = useState({
    nombre: '',
    apellidoPaterno: ''
  });
  //---------------------------------------Paginacion------------------------------------------
  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const handleChangeDatosPersonales = (event) => {
    const { name, value } = event.target;
    setDatosPersonales(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChangeDatosHistorial = (event) => {
    const { name, value } = event.target;
    setDatosHistorial(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario completo
    console.log('Datos del formulario:', { datosPersonales, domicilio, contactoEmergencia });
  };

  return (
    <div>
      <div>
        <form className='form_Historial_Madico' action="" method="post" onSubmit={handleSubmit}>
            {paginaActual === 1 && (
            <div className='form_Grid_HM'>
              <div className='title_Form_HM'><h1>Registro de Historial Medico</h1></div>
                <div className='sub-titulo'><h1>Datos Personales</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                  <div><input 
                        type="text" 
                        name="nombre" 
                        id="" 
                        className='input-text' 
                        value={datosPersonales.nombre} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Apellido Paterno:</label></div>
                  <div><input 
                        type="text" 
                        name="apellidoPaterno" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoPaterno} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>

                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Apellido Materno:</label></div>
                  <div><input 
                        type="text" 
                        name="apellidoMaterno" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoMaterno} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                
                <div className='sub-titulo'><h1>Domicilio</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Municipio:</label></div>
                  <div><input 
                        type="text" 
                        name="municipio" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.municipio} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Colonia:</label></div>
                  <div><input 
                        type="text" 
                        name="colonia" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.colonia} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Calle:</label></div>
                  <div><input 
                        type="text" 
                        name="calle" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.calle} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                    
                  </div>
                </div>
                
                <div className='sub-titulo'><h1>Contacto de Emergencia</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                  <div><input 
                        type="text" 
                        name="nombre" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.nombre} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Apellido Paterno:</label></div>
                  <div><input 
                        type="text" 
                        name="apellidoPaterno" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoPaterno} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Apellido Materno:</label></div>
                  <div><input 
                        type="text" 
                        name="apellidoMaterno" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoMaterno} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Correo Electronico:</label></div>
                  <div><input 
                        type="text" 
                        name="correoElectronico" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.correoElectronico} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Telefono:</label></div>
                  <div><input 
                        type="text" 
                        name="telefono" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.telefono} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
            </div>           
            )}
            {paginaActual === 2 &&(
            <div className='form_Grid_HM'>
                <div className='sub-titulo'><h1>Contacto de Emergencia</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                  <div><input 
                        type="text" 
                        name="nombre" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.nombre} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Apellido Paterno:</label></div>
                  <div><input 
                        type="text" 
                        name="apellidoPaterno" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.apellidoPaterno} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
            </div>
            )}           
        </form>
        <div className='cont_Paginacion'>
            {paginaActual > 1 && <button className='btn_Paginacion' type="button" onClick={() => cambiarPagina(paginaActual - 1)}
            >Anterior</button>}
            {paginaActual < 2 && <button className='btn_Paginacion' type="button" onClick={() => cambiarPagina(paginaActual + 1)}
            >Siguiente</button>}
        </div>
      </div>
    </div>
  )
}

export default FormHistorialMedico