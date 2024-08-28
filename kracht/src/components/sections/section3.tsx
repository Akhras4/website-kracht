import React from "react"
import Logo1 from '../../assets/img/section3/Ami-logo.png'
import Logo2 from '../../assets/img/section3/Fieldpiece-logo.jpg'
import Logo3 from '../../assets/img/section3/Gazelle-Logo-Koninklijke-Royal-Blue-RGB-30dpi.png'
import Logo4 from '../../assets/img/section3/Maron.png'
import Logo5 from '../../assets/img/section3/Meekes-logo-transparant_2024-08-05-154620_kuwl.png'
import Logo6 from '../../assets/img/section3/Reinten.png'
import Logo7 from '../../assets/img/section3/Rymax.png'
import Logo8 from '../../assets/img/section3/Specialized_red_S_black_logotype.png'
import Logo9 from '../../assets/img/section3/morssinkhof.png'
import Logo10 from '../../assets/img/section3/transferpersshop.png'
import './section3.css'
const Section3:React.FC=()=> {
    return (
        <section className="logos-section"> 
  <div  className="logo-item"><img src={Logo1} alt="Ami-logo" /></div>
  <div  className="logo-item"><img src={Logo2} alt="Fieldpiece-Logo" /></div>
  <div className="logo-item"><img src={Logo3} alt="Gazelle" /></div>
  <div className="logo-item"><img src={Logo4} alt="Maron-logo" /></div>
  <div  className="logo-item "><img src={Logo5} alt="Reinten-logo" /></div>
  <div className="logo-item"><img src={Logo6} alt="Rymax" /></div>
  <div className="logo-item"><img src={Logo7} alt="Specialized" /></div>
  <div className="logo-item"><img src={Logo8} alt="Specialized" /></div>
  <div className="logo-item"><img src={Logo9} alt="morssinkhof" /></div>
  <div className="logo-item"><img src={Logo10} alt="transferpersshop" /></div>
   <div className="logo-item"><img src={Logo4} alt="Maron-logo" /></div>
  
</section>
    )}
export default Section3