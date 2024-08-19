
import React from "react"
import './inmiddelsection.css'
import Imgbg from "../imgbg/imgbg";
import Unorderlist from "./unorderlist";

interface InmiddelsectionProps {
    tittlePargraph: string;
    title: string;
    subtitle: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    subtitle4: string;
    subtitle5: string;
    subtitle6: string;
    displayType: 'list' | 'pargraph'


}


const Inmiddelsection: React.FC<InmiddelsectionProps> = ({
    tittlePargraph,
    title,
    subtitle,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    subtitle5,
    subtitle6,
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
                        <p>{subtitle}</p>
                        <p>{subtitle1}</p>
                        <p>{subtitle2}</p>
                        <p>{subtitle3}</p>
                        <p>{subtitle4}</p>
                        <p>{subtitle5}</p>
                        <p>{subtitle6}</p>
                    </>
                ) : (
                    <Unorderlist
                        list={[subtitle, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6]} />
                )}



            </div>
        </section>
    )
}
export default Inmiddelsection