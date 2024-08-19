
import React from "react"
import './inmiddelsection.css'
import Imgbg from "../imgbg/imgbg";
import Unorderlist from "./unorderlist";

interface InmiddelsectionProps {
    tittlePargraph: string;
    title: string;
    subtitle: React.ReactNode [];
    displayType: 'list' | 'pargraph'


}


const Inmiddelsection: React.FC<InmiddelsectionProps> = ({
    tittlePargraph,
    title,
    subtitle,
    displayType,

}) => {
    return (
        <section className="Inmiddelsection">
            <Imgbg />
            <div className="container">
                {tittlePargraph ? <p className="tittlePargraph">{tittlePargraph}</p> : null}
                <h1>{title}</h1>
                {displayType === 'pargraph' ? (
                    <>
                      {subtitle.map((item,index)=>(
                        <p key={index}>{item}</p>
                      ))}
                    </>
                ) : (
                    <Unorderlist
                        list={subtitle} />
                )}



            </div>
        </section>
    )
}
export default Inmiddelsection