import React from 'react'
import './FormRegistroPersonal.css'
import { Formik } from 'formik'

const FormRegistroPersonal = () => {
  return (
    <div>
      <div>
        <Formik
            initialValues={{
                idAsociado:'',
                nombre:'',
                apellidoPaterno:'',
                apellidoMaterno:'',
                correo:'',
                contrasena:'',
                contrasena2:'',
                tipoAsociado:'',
                cargo:''
            }}
            validate={(valores)=>{
                let errores={};

                //validacion del nombre
                if(!valores.nombre){
                    errores.nombre='Por favor ingresa un nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre='El nombre solo puede contener letras'
                }

                //validacion de los apellidos
                if(!valores.apellidoPaterno){
                    errores.apellidoPaterno='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoPaterno)){
                    errores.apellidoPaterno='El apellido solo puede contener letras'
                }

                if(!valores.apellidoMaterno){
                    errores.apellidoMaterno='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoMaterno)){
                    errores.apellidoMaterno='El apellido solo puede contener letras'
                }

                //validacion del correo
                if(!valores.correo){
                    errores.correo='Por favor ingresa un correo'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo='Debe de contener letras, @ y .com '
                }

                //validacion para el tipo de asociado
                if(!valores.tipoAsociado){
                    errores.tipoAsociado='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tipoAsociado)){
                    errores.tipoAsociado='El apellido solo puede contener letras'
                }

                //validacion para la contraseña
                if(!valores.contrasena){
                    errores.contrasena='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.contrasena)){
                    errores.contrasena='El apellido solo puede contener letras'
                }

                if(!valores.contrasena2){
                    errores.contrasena2='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.contrasena2)){
                    errores.contrasena2='El apellido solo puede contener letras'
                }

                //validacion para el cargo
                /*if(!valores.cargo){
                    errores.cargo='Por favor ingresa un apellido'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.cargo)){
                    errores.cargo='El apellido solo puede contener letras'
                }*/
                
                return errores;
            }}
            onSubmit={(valores,{resetForm})=>{
                resetForm();
                console.log('formulario enviado');
            }}
        >{({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
            <form className='form-personal' onSubmit={handleSubmit}>
                <div className='form-grid'>
                    <div className='title_form'>
                        <h1>Registro de Personal</h1>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Id Asociado:</label></div>
                        <div><input 
                                type="text" 
                                name="idAsociado" 
                                id="idAsociado" 
                                className='input-text' 
                                placeholder='Id Asociado' 
                                value={values.idAsociado}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />                                                              
                        </div>
                        <div className='msg_error'>
                            {touched.idAsociado && errors.idAsociado && <div><span>{errors.idAsociado}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Nombre:</label></div>
                        <div><input 
                                type="text" 
                                name="nombre" 
                                id="nombre" 
                                className='input-text' 
                                placeholder='Nombre' 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.nombre && errors.nombre && <div><span>{errors.nombre}</span></div>}
                        </div>  
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Apellido Paterno:</label></div>
                        <div><input 
                                type="text" 
                                name="apellidoPaterno" 
                                id="apellidoPaterno" 
                                className='input-text' 
                                placeholder='Apellido Paterno' 
                                value={values.apellidoPaterno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.apellidoPaterno && errors.apellidoPaterno &&<div><span>{errors.apellidoPaterno}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Apellido Materno:</label></div>
                        <div><input 
                                type="text" 
                                name="apellidoMaterno" 
                                id="apellidoMaterno" 
                                className='input-text' 
                                placeholder='Apellido Materno' 
                                value={values.apellidoMaterno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.apellidoMaterno && errors.apellidoMaterno &&<div><span>{errors.apellidoMaterno}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Correo:</label></div>
                        <div><input 
                                type="email" 
                                name="correo" 
                                id="correo" 
                                className='input-text' 
                                placeholder='Correo'
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.correo && errors.correo && <div><span>{errors.correo}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Tipo de Asociado:</label></div>
                        <div><input 
                                type="text" 
                                name="tipoAsociado" 
                                id="tipoAsociado" 
                                className='input-text'
                                placeholder='Tipo Asociado'
                                value={values.tipoAsociado}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.tipoAsociado && errors.tipoAsociado && <div><span>{errors.tipoAsociado}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Contraseña:</label></div>
                        <div><input 
                                type="password" 
                                name="contrasena" 
                                id="contrasena" 
                                className='input-text'
                                placeholder='Contraseña'
                                value={values.contrasena}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.contrasena && errors.contrasena && <div><span>{errors.contrasena}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Confirmar Contraseña:</label></div>
                        <div><input 
                                type="password" 
                                name="contrasena2" 
                                id="contrasena2" 
                                className='input-text'
                                placeholder='Confirmar Contraseña'
                                value={values.contrasena2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className='msg_error'>
                            {touched.contrasena2 && errors.contrasena2 && <div><span>{errors.contrasena2}</span></div>}
                        </div>
                    </div>
                    <div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Cargo:</label></div>
                        <div>
                            <select value='' onChange='' className='input-text'>
                                <option value="">Seleccione una opción</option>
                                <option value="ADM">Administrador</option>
                                <option value="LIC">Lic. en Enfermeria</option>
                                <option value="MED">Médico</option>
                                <option value="SOC">Socorrista</option>
                                <option value="TEM">Paramedicos</option>
                            </select>
                        </div>
                        <div className='msg_error'>
                            {touched.cargo && errors.cargo && <div><span>{errors.cargo}</span></div>}
                        </div>
                    </div>
                    {/*<div className='grup-input'>
                        <div><label htmlFor="" className='label-name'>Cargo:</label></div>
                        <div><input type="text" name="" id="" className='input-text' /></div>
                    </div>*/}
                    <div className='conte-registrar'>
                        <input className='btnRegistrar' type="submit" value="Registrar" />
                    </div>
                </div>
            </form>
        )}
            
        </Formik>
        
      </div>
    </div>
  )
}

export default FormRegistroPersonal
