
import React from "react"
import './inmiddelsection.css'
import Imgbg from "../imgbg/imgbg";
import Unorderlist from "./unorderlist";

export interface CustomStyles {
    pStyle?: React.CSSProperties;
    container?:React.CSSProperties
    tittlePargraph?:React.CSSProperties

}

interface InmiddelsectionProps {
    tittlePargraph: string;
    title: string;
    subtitle: React.ReactNode [];
    displayType: 'list' | 'pargraph',
    customStyles?: CustomStyles;


}


const Inmiddelsection: React.FC<InmiddelsectionProps> = ({
    tittlePargraph,
    title,
    subtitle,
    displayType,
    customStyles = {},

}) => {
    const animation=[
        { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
        { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7 } },
        { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
    
    ]
    return (
        <section className="Inmiddelsection" >
            <Imgbg />
            <div className="container" style={{...customStyles.container}}>
                <div>
                {tittlePargraph ? <p style={customStyles.tittlePargraph } className="tittlePargraph">{tittlePargraph}</p> : null}
                <h1>{title}</h1>
                </div>
                {displayType === 'pargraph' ? (
                    <>
                      {subtitle.map((item,index)=>(
                        <p style={customStyles.pStyle } key={index}>{item}</p>
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