import React from 'react'
import "./Navbar.css"
import Logo from '../../img/LR.jpg'
import Parulo from '../../img/parulo.jpg'




export default function Navbar() {
  return (
    <div className='Navegacion'>

      <div className='NavRp'>
      <img className='LR' src={Logo} alt="" />
      </div>
    <div className='NavRp'>
    <h1 className='Titulo'>LA</h1>
    <strong><h1 className='Titulo'>REPANDILLA</h1></strong>
    </div>
   <div className='NavRp' id='Loguito'>
   <img className='Pp' src={Parulo} alt="" />
   </div>
   
    </div>
  )
}
