import React,{ useState} from "react"
import './emailms.css'


const Emailms: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("") ;
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email)
        console.log(name)
        alert('Email sent!');
    };
    return (
        <div className="emailms">
            <div className="left">
            <hgroup>
                <h5>
                Meer digital happiness? Schrijf je in voor onze nieuwsbrief en blijf op de hoogte! 
                </h5>
                <p>
                Af en toe ontvang je leuke updates, tips of belangrijke momenten, geserveerd in één mail.  
                </p>
            </hgroup>
             </div>
                    <div className="right">
                    <div className="form">
                    <form action="" onSubmit={sendEmail}>
                       <label htmlFor="name" ></label>
                       <input type="text" id="name" required placeholder="voornaam" onChange={handleNameChange } />
                       <label htmlFor="email"></label>
                       <input type="email" id="email" required placeholder="E-mailadres" onChange={handleEmailChange}></input>
                       <button type="submit" className="arrow-button">
                            <svg
                                width="70px"
                                height="15px"
                                viewBox="0 0 30 8"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                className="arrow-svg"
                            >
                                <g
                                id="⏺️-Icons-"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                                >
                                <g
                                    id="rightarrow"
                                    transform="translate(0.000000, 0.000000)"
                                    fill="currentColor"
                                >
                                    <rect id="Rectangle" x="0" y="3" width="24" height="2"></rect>
                                    <polygon
                                    id="Triangle"
                                    transform="translate(26.500000, 4.000000) scale(-1, 1) rotate(-90.000000) translate(-26.500000, -3.000000)"
                                    points="26.5 1 30 7 23 7"
                                    ></polygon>
                                </g>
                                </g>
                            </svg>
                        </button>
                    </form>
                    </div>
                    <div className="promisText">
                        <p>Bij het versturen van je gegevens ga je automatisch akkoord met ons Privacybeleid.</p>
                    </div>
            </div>
        </div>
    )
}
export default Emailms