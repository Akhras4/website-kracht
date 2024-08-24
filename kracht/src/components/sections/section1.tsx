import React from "react";
import './section.css'
import Imgmotionbg from "../imgmotionbg/imgmotionbg";

interface sectionProps{
    titelSection:React.ReactNode []
    titelDisc:string;
    children?: React.ReactNode;
}

const Section1:React.FC<sectionProps>=({
    titelSection,
    titelDisc,
    children,
})=>{
    return (
        <>
        <section className="section">
        <Imgmotionbg />
        {titelDisc? 
        <hgroup>
           {titelSection && titelSection.map((item,index)=>(
           item && <h1 key={index}>{item}</h1>
           ))}
           {titelDisc ? <p className="mt-5">{titelDisc}</p> : null }
        </hgroup>
        :null}
            <div className="sectionFlexcontiner">
            {children}
            </div>   
        </section>

 
        </>
    )
}
export default Section1