import React from 'react'
import imgbg1 from '../../assets/img/hero-dot-blue.00c90c9.webp'
import imgbg2 from '../../assets/img/hero-dot-pink.7074525.webp'
import './imgbg.css'

const Imgbg:React.FC=()=> {
  return (
    <div className="imgbgcon">
       
        <img className='blueimgbg' src={imgbg1} />
        <img className='pinkimgbg' src={imgbg2} />
        
    </div>
  )
}
export default  Imgbg