import{BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import HomeAdmin from '../Pages/HomeAdmin/HomeAdmin'
import Citas from '../Pages/Citas/Citas'
import ContratacionAmbulancias from '../Pages/ContratacionAmbulancias/ContratacionAmbulacias'
import Donaciones from '../Pages/Donaciones/Donaciones'
import HistorialMedico from '../Pages/HistorialMedico/HistorialMedico'
import SuministrosMedicos from '../Pages/SuministrosMedicos/SuministrosMedicos'
import SideBar from '../Components/SideBar/SideBar'
import {Nav} from '../Components/Nav/Nav'
import Users from '../Pages/Users/Users'
import RegistroPersonal from '../Pages/RegistroPersonal/RegistroPersonal'
import PersonalRegistrado from '../Pages/PersonalRegistrado/PersonalRegistrado'
import Emergencias from '../Pages/Emergencias/Emergencias'

export default function Router() {
  return (
    <BrowserRouter>
      <SideBar>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomeAdmin/>}/>
          <Route path='/Citas' element={<Citas/>}/>
          <Route path='/ContratacionAmbulancias' element={<ContratacionAmbulancias/>}/>
          <Route path='/Donaciones' element={<Donaciones/>}/>
          <Route path='/Emergencias' element={<Emergencias/>}/>
          <Route path='/HistorialMedico' element={<HistorialMedico/>}/>
          <Route path='/RegistroPersonal' element={<RegistroPersonal/>}/>
          <Route path='/PersonalRegistrado' element={<PersonalRegistrado/>}/>
          <Route path='/SuministrosMedicos' element={<SuministrosMedicos/>}/>
          <Route path='/UsuariosRegistrados' element={<Users/>}/>
        </Routes>
      </SideBar>
        
    </BrowserRouter>
  )
}
