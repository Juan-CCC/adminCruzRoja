import React,{useState} from 'react'
import './FormHistorialMedico.css'

const FormHistorialMedico = () => {

  const [paginaActual, setPaginaActual] = useState(1);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad:'',
    municipio: '',
    colonia: '',
    calle: '',
    telefono:'',
    nombre2: '',
    apellidoPaterno2: '',
    apellidoMaterno2: '',
    telefono2: ''
  });
  const [datosHistorial, setDatosHistorial] = useState({
    nombreAntecedente: '',
    fechaDiacnosticada: '',
    tratamiento:'',
    alergias:'',
    motivo:'',
    diacnosticoIngreso:'',
    diacnosticoEgreso:'',
    medicamentos:''
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
    //const data= new FormData();
    

    fetch("http://localhost:3000/nuevoHistorialMedico",
          {
            method: "POST",
            credentials: 'include',
            headers: {
                      'Content-Type': 'application/json' // Especifica que el cuerpo de la solicitud es JSON
                     },
                        body: JSON.stringify(datosPersonales,datosHistorial) // Convierte el objeto 'valores' a JSON
                    })
    
    console.log('Datos del formulario:', { datosPersonales, datosHistorial });
  };

  return (
    <div>
      <div>
        <form className='form_Historial_Madico' action="" method="post" onSubmit={handleSubmit}>
            {paginaActual === 1 && (
            <div className='form_Grid_HM'>
              {/*<div className='title_Form_HM'><h1>Registro de Historial Medico</h1></div>*/}
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
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Edad:</label></div>
                  <div><input 
                        type="text" 
                        name="edad" 
                        id="edad" 
                        className='input-text'
                        value={datosPersonales.edad} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                
                
                {/*<div className='sub-titulo'><h1>Domicilio</h1></div>*/}
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
                
                <div className='sub-titulo'><h1>Contacto de Emergencia</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                  <div><input 
                        type="text" 
                        name="nombre2" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.nombre2} 
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
                        name="apellidoPaterno2" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoPaterno2} 
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
                        name="apellidoMaterno2" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.apellidoMaterno2} 
                        onChange={handleChangeDatosPersonales}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
              {/*<div className='grup-input'>
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
                </div>*/}
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Telefono:</label></div>
                  <div><input 
                        type="text" 
                        name="telefono2" 
                        id="" 
                        className='input-text'
                        value={datosPersonales.telefono2} 
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
                <div className='sub-titulo'><h1>Antecedentes Patologicos</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre del antecedente:</label></div>
                  <div><input 
                        type="text" 
                        name="nombreAntecedente" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.nombreAntecedente} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Fecha en la que fue diacnosticada:</label></div>
                  <div><input 
                        type="text" 
                        name="fechaDiacnosticada" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.fechaDiacnosticada} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Cuenta con algun Tratamiento:</label></div>
                  <div><input 
                        type="text" 
                        name="tratamiento" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.tratamiento} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Alérgico a Medicamento:</label></div>
                  <div><input 
                        type="text" 
                        name="alergias" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.alergias} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='sub-titulo'><h1>Datos del Expediente</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Motivo de Ingreso:</label></div>
                  <div><input 
                        type="text" 
                        name="motivo" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.motivo} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Diacnostico de Ingreso:</label></div>
                  <div><input 
                        type="text" 
                        name="diacnosticoIngreso" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.diacnosticoIngreso} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Diacnostico Egreso:</label></div>
                  <div><input 
                        type="text" 
                        name="diacnosticoEgreso" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.diacnosticoEgreso} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Medicamentos recetados:</label></div>
                  <div><input 
                        type="text" 
                        name="medicamentos" 
                        id="" 
                        className='input-text'
                        value={datosHistorial.medicamentos} 
                        onChange={handleChangeDatosHistorial}
                      />
                  </div>
                  <div className='msg_error'>
                       
                  </div>
                </div>
                <div className='conte-registrarHM'>
                        <input className='btnRegistrar' type="submit" value="Registrar" />
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
