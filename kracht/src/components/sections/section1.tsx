import React from "react";
import './section.css'
import Imgmotionbg from "../imgmotionbg/imgmotionbg";

interface sectionProps{
    titelSection1:string;
    titelSection2:string;
    titelSection3:string;
    titelDisc:string;
    children?: React.ReactNode;
}

const Section1:React.FC<sectionProps>=({
    titelSection1,
    titelSection2,
    titelSection3,
    titelDisc,
    children,
})=>{
    return (
        <>
        <section className="section">
        <Imgmotionbg />
        <hgroup>
           <h1>
           {titelSection1}
           </h1>
           {titelSection2 &&
            <h1>
           {titelSection2}
           </h1>
           }
           {titelSection3 &&
            <h1>
           {titelSection3}
           </h1>
           }
           {titelDisc ? <p>{titelDisc}</p> : null }
        </hgroup>
            <div className="sectionFlexcontiner">
            {children}
            </div>   
        </section>

 
        </>
    )
}
export default Section1