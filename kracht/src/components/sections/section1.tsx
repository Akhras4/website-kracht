import React,{useRef} from "react";
import './section.css'
import Imgmotionbg from "../imgmotionbg/imgmotionbg";
import { motion,useInView} from 'framer-motion'

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
    const titleRef = useRef(null);
    const isInView = useInView(titleRef,{ once: true })
const animation=[
    { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
    { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7 } },
    { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },

]
    return (
        <>
        <section className="section">
        <Imgmotionbg />
        {titelSection ?
        <hgroup ref={titleRef}>
           {isInView && titelSection && titelSection.map((item,index)=>(
           item && <motion.h1
            key={index}
            initial={animation[index]?.initial}
            animate={animation[index]?.animate}
            transition={animation[index]?.transition}
            >
            {item}
            </motion.h1>
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