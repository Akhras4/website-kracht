import React from "react"
import './footer.css'
// import Imgbg from "../imgbg/imgbg"
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* <Imgbg /> */}
            <div className="col">
                <h6>snel naar</h6>
                <Link to="/"><p>Home</p></Link>
                <Link to="/over-ons/"><p>over Kracht</p></Link>
                <Link to=""><p> Cases</p></Link>
                <Link to=""><p>Blog</p></Link>
                <Link to="/work-hard-play-harder/"><p>Vactures</p></Link>
                <Link to="/contact/"><p>Conatact</p></Link>
            </div>
            <div className="col">
                <h6>over kracht</h6>
                <Link to="/over-ons/"><p>Team & cultuur</p></Link>
                <Link to="/over-ons/werkwijze/"><p>Werkwijze</p></Link>
                <Link to="/diensten/social-content/"><p>Diensten</p></Link>
                <Link to="/over-ons/duurzaam-ondernemen/"><p>Duurzaam ondernemen</p></Link>
            </div>
            <div className="col" >
                <h6>Onze diensten</h6>
               <Link to="/diensten/digital-business-strategy"><p>Digital business strategy</p></Link> 
                <Link to="/diensten/digital-marketing/"><p>Digital marketing</p></Link>
                <Link to="/diensten/design-en-technology/"><p>Design & technology</p></Link>
                <Link to="/diensten/social-content/"><p>Social conten</p></Link>
            </div>
            <div className="col">
                <h6>Get in Touch!</h6>
                <p className="pointer-events-none">Gildekamp 2311</p>
                <p className="pointer-events-none">6545 KM</p>
                <p className="contact">0616692843</p>
                <p className="contact">abdoakhras4<span>@gmail.com</span></p>
                <p className="contact">Nijmagen</p>
                <p></p>
            </div>

        </footer>
    )
}
export default Footer