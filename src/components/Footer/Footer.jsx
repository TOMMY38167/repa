import React from 'react'
import "./Footer.css"
import { FaInstagram,FaYoutube,FaWhatsapp } from "react-icons/fa";

export default function footer() {
  return (
    <div className='Footer'>
      <div className='Bolivia'>
      <a ClassName='Yt' href="#"><FaYoutube /></a>
      </div>
      <div className='Chile'>
      <a className='Ig' href="#"><FaInstagram /></a>
      </div>
      <div className='Brazil'>
      <a classname= 'Wpp' href="#"><FaWhatsapp /></a>
      </div> 
    </div>
  )
}
