import React from "react"
import './footer.css'
// import Imgbg from "../imgbg/imgbg"
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* <Imgbg /> */}
            <div className="col">
                <h6>snel naar</h6>
                <p>Home</p>
                <p>over Kracht</p>
                <p> Cases</p>
                <p>Blog</p>
                <p>Vactures</p>
                <p>Conatact</p>
            </div>
            <div className="col">
                <h6>over kracht</h6>
                <p>Team & cultuur</p>
                <p>Werkwijze</p>
                <p>Diensten</p>
                <p>Duurzaam ondernemen</p>
            </div>
            <div className="col" >
                <h6>Onze diensten</h6>
                <p>Digital business strategy</p>
                <p>Digital marketing</p>
                <p>Design & technology</p>
                <p>Social conten</p>
            </div>
            <div className="col">
                <h6>Get in Touch!</h6>
                <p>Gildekamp 2311</p>
                <p>6545 KM</p>
                <p className="contact">0616692843</p>
                <p className="contact">abdoakhras4@gmail.com</p>
                <p className="contact">Nijmagen</p>
                <p></p>
            </div>

        </footer>
    )
}
export default Footer