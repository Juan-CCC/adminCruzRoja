import React,{useState,useEffect} from 'react'
import './FormEmergencia.css'

const FormEmergencia = () => {

    const [tipoEmergencia,setTipoEmergencia]=useState([]);

    const URLUser='http://localhost:3000/tipoEmergencia';

    const peticionGet= async()=>{
        const response= await fetch(URLUser)
        const data= await response.json();
        setTipoEmergencia(data) 
    }
    
    useEffect(()=>{
        peticionGet();
    },[])

    const [personal,setPersonal]=useState([]);

    const URLPersonal='http://localhost:3000/personal';

    const peticionGet2= async()=>{
        const response= await fetch(URLPersonal)
        const data= await response.json();
        setPersonal(data) 
    }
    
    useEffect(()=>{
        peticionGet2();
    },[])

    const [folio,setFolio]= useState('')
    const [nombre,setNombre]= useState('')
    const [apellidoPaterno,setApellidoPaterno]= useState('')
    const [apellidoMaterno,setApellidoMaterno]= useState('')
    const [lugarServicio, setLugarServicio] = useState('');
    const [sexo, setSexo] = useState('');
    const [edad, setEdad] = useState('');
    const [tipoEmergencias,setTipoEmergencias] = useState('');
    const [responsable,setResponsable] = useState('');

    //------------------ mensajes de error
    const [edadError, setEdadError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordError2, setPasswordError2] = useState('');
    const [lugarServicioError, setLugarServicioError] = useState('');
    const [folioError, setFolioError] = useState('');
    const [nombreError, setNombreError] = useState('');
    const [apellidoMError, setApellidoMError] = useState('');
    const [apellidoPError, setApellidoPError] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

    }
    //------------------- Validaciones ----------------------
    const validateFolio =(folio)=>{
        if(folio==''){
         setFolioError('No puede estar vacio')
         return false;
  
        }else{
          if(folio.length<2){
            setFolioError('minimo de 2 caracteres')
            return false;
          }else{
            const nombreRegex = /^[a-zA-Z\s]+$/;
            if (folioRegex.test(folio)){
              setFolioError('');
              return true;
            }
            else{
              setFolioError('No puede contener letras');
              return false;
            }
          }
        }
        
    }

    const validateNombre =(nombre)=>{
        if(nombre==''){
         setNombreError('No puede estar vacio')
         return false;
  
        }else{
          if(nombre.length<2){
            setNombreError('minimo de 2 caracteres')
            return false;
          }else{
            const nombreRegex = /^[a-zA-Z\s]+$/;
            if (nombreRegex.test(nombre)){
              setNombreError('');
              return true;
            }
            else{
              setNombreError('No puede contener numeros');
              return false;
            }
          }
        }
        
    }
    const validateApellidoP =(apellidoPaterno)=>{
        const nombreRegex2 = /^[a-zA-Z\s]+$/;
        if(apellidoPaterno==''){
          setApellidoPError('No puede estar vacio')
          return false;
         }else{
           if(apellidoPaterno.length<5){
            setApellidoPError('minimo de 5 caracteres')
            return false;
           }else{
             const nombreRegex2 = /^[a-zA-Z\s]+$/;
             if (nombreRegex2.test(apellidoPaterno)){
              setApellidoPError('');
               return true;
             }
             else{
              setApellidoPError('No puede contener numeros');
               return false;
             }
           }
        }
      }
      const validateApellidoM =(apellidoMaterno)=>{
        const nombreRegex3 = /^[a-zA-Z\s]+$/;
        if(apellidoMaterno==''){
          setApellidoMError('No puede estar vacio')
          return false;
         }else{
           if(apellidoMaterno.length<5){
            setApellidoMError('minimo de 5 caracteres')
            return false;
           }else{
             const nombreRegex3 = /^[a-zA-Z\s]+$/;
             if (nombreRegex3.test(apellidoMaterno)){
              setApellidoMError('');
               return true;
             }
             else{
              setApellidoMError('No puede contener numeros');
               return false;
             }
           }
        }
    }
    const validateLugarServicio =(lugarServicio)=>{
        const nombreRegex3 = /^[a-zA-Z\s]+$/;
        if(lugarServicio==''){
          setLugarServicioError('No puede estar vacio')
          return false;
         }else{
           if(lugarServicio.length<5){
            setLugarServicioError('minimo de 5 caracteres')
            return false;
           }else{
             const nombreRegex3 = /^[a-zA-Z\s]+$/;
             if (nombreRegex3.test(lugarServicio)){
              setLugarServicioError('');
               return true;
             }
             else{
              setLugarServicioError('No puede contener numeros');
               return false;
             }
           }
        }
    }
    const validateEdad =(edad)=>{
        const nombreRegex3 = /^[a-zA-Z\s]+$/;
        if(edad==''){
          setEdadError('No puede estar vacio')
          return false;
         }else{
           if(edad.length<2){
            setEdadError('minimo de 2 caracteres')
            return false;
           }else{
             const nombreRegex3 = /^[a-zA-Z\s]+$/;
             if (nombreRegex3.test(edad)){
              setEdadError('');
               return true;
             }
             else{
              setEdadError('No puede contener letras');
               return false;
             }
           }
        }
      }

  return (
    <div>
      <div>
        <form className='form_Emergencias' onSubmit={handleSubmit}>
            <div className='form_Grid_emergencia'>
                <div className='sub-titulo'><h1>Datos Personales</h1></div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Folio:</label></div>
                  <div><input 
                        type="text" 
                        name="folio" 
                        id="" 
                        className='input-text' 
                        value={folio}
                        onChange={(e) => setFolio(e.target.value)}
                        onBlur={() => validateFolio(folio)}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                  <div><input 
                        type="text" 
                        name="nombre" 
                        id="" 
                        className='input-text' 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        onBlur={() => validateNombre(nombre)}
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
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)}
                        onBlur={() => validateApellidoP(apellidoPaterno)}
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
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)}
                        onBlur={() => validateApellidoM(apellidoMaterno)}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Lugar de Servicio:</label></div>
                  <div><input 
                        type="text" 
                        name="lugarServicio" 
                        id="" 
                        className='input-text' 
                        value={lugarServicio}
                        onChange={(e) => setLugarServicio(e.target.value)}
                        onBlur={() => validateLugarServicio(lugarServicio)}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Sexo:</label></div>
                  <div>
                    <input type="radio" name="sexo" value={'F'}/> Femenino
                    <input type="radio" name="sexo" value={'M'}/> Masculino
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Edad:</label></div>
                  <div><input 
                        type="text" 
                        name="edad" 
                        id="" 
                        className='input-text' 
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        onBlur={() => validateEdad(edad)}
                      />
                  </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                    <div><label htmlFor="" className='label-name'>Tipo de Emergencia:</label></div>
                    <div><select name="tipoEmergencias" 
                                value={tipoEmergencias}
                                onChange={(e) => setTipoEmergencias(e.target.value)}
                                //onBlur={() => validateTipoEmergencia(tipoEmergencias)}
                                className='input-text'>
                                    {tipoEmergencia.map((tipo)=>(
                                        <option 
                                            key={tipo.ID_Emergencia} 
                                            value={tipo.ID_Emergencia}>{tipo.tipo}
                                        </option>
                                    ))}
                        </select>
                    </div>
                  <div className='msg_error'>
                      
                  </div>
                </div>
                <div className='grup-input'>
                  <div><label htmlFor="" className='label-name'>Responsable:</label></div>
                  <div><select name="responsable" 
                                value={responsable}
                                onChange={(e) => setResponsable(e.target.value)}
                                /*onBlur={() => validateNombre(responsable)}*/
                                className='input-text'>
                                    {personal.map((personales)=>(
                                        <option 
                                            key={personales.ID_Asociado} 
                                            value={personales.ID_Asociado}>{personales.nombre}
                                        </option>
                                    ))}
                        </select>
                    </div>
                    <div className='msg_error'>
                      
                    </div>
                </div>
                <div className='conte-registrar'>
                    <input className='btnRegistrar' type="submit" value="Registrar" />
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default FormEmergencia
