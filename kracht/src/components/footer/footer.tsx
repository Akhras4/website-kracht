import React from "react"
import './footer.css'
import { Link } from "react-router-dom"
// import Imgbg from "../imgbg/imgbg"
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* <Imgbg /> */}
            <div className="col">
                <h6>snel naar</h6>
                <a href="/"><p>Home</p></a>
                <a href="/over-ons/"><p>over Kracht</p></a>
                <a href=""><p> Cases</p></a>
                <a href=""><p>Blog</p></a>
                <a href="/work-hard-play-harder/"><p>Vactures</p></a>
                <a href="/contact/"><p>Conatact</p></a>
            </div>
            <div className="col">
                <h6>over kracht</h6>
                <Link to="/over-ons/"><p>Team & cultuur</p></Link>
                <a href="/over-ons/werkwijze/"><p>Werkwijze</p></a>
                <a href="/diensten/social-content/"><p>Diensten</p></a>
                <a href="/over-ons/duurzaam-ondernemen/"><p>Duurzaam ondernemen</p></a>
            </div>
            <div className="col" >
                <h6>Onze diensten</h6>
               <a href="/diensten/digital-business-strategy"><p>Digital business strategy</p></a> 
                <a href="/diensten/digital-marketing/"><p>Digital marketing</p></a>
                <a href="/diensten/design-en-technology/"><p>Design & technology</p></a>
                <a href="/diensten/social-content/"><p>Social conten</p></a>
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