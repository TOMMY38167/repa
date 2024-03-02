import React from 'react'
import "./Footer.css"
import { FaInstagram,FaYoutube,FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import argentina from "../../img/argentina.png";
import bolivia from "../../img/bolivia.png";
import brasil from "../../img/brasil.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";

export default function footer() {
  return (
    <div className='Footer'>
      <div className=''>
        <div className=''>
          <a href="https://www.instagram.com/paruloproduccionespro/"><img src={instagram} className='img' alt="" />@paruloproduccionespro</a>
        </div>
        <div className=''>
          <a href="https://www.instagram.com/parulo_pro_bolivia/"><img src={instagram} className='img' alt="" />@parulo_pro_bolivia</a>
        </div>
        <div className=''>
          <a href="https://www.instagram.com/parulobrasil/"><img src={instagram} className='img' alt="" />@parulobrasil</a>
        </div> 
      </div>
      <div className=''>
        <div className=''>
          <a><img src={argentina} className='img' alt="" />01149867085</a>
        </div>
        <div className=''>
          <a><img src={bolivia} className='img' alt="" />+591 75916177</a>
        </div>
        <div className=''>
          <a><img src={brasil} className='img' alt="" />+5511 953339621</a>
        </div> 
      </div>
      <div className=''>
        <div className=''>
          <a href="https://www.instagram.com/oscarlarepa/"><img src={instagram} className='img' alt="" />@oscarlarepa</a>
        </div>
        <div className=''>
          <a href="#"><img src={twitter} className='img' alt="" />@oscarlarepa</a>
        </div>
        <div className=''>
          <a href="#"><img src={facebook} className='img' alt="" />Oscar Gabriel Bellondi</a>
        </div> 
      </div>
    </div>
  )
}
