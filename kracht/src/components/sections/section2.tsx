import React from 'react'
import TextButton from '../TextButton/TextButton';
import './section2.css'

interface section2Props{
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    imgSrc:string;
    imgAlt:string;
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    text:string;
    link:string;
}

const section2:React.FC<section2Props>=({
    direction,
    title,
    description1,
    description2,
    description3,
    description4,
    imgSrc,
    imgAlt,
    link,
    text,

})=>{
   
   return(
    <section className='section2'style={{ flexDirection: direction}}>
        <div className='part1'>
         <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className='part2'>
            <hgroup>
                <h1>{title}</h1>
                <br /> 
                <p>{description1}</p>
                <br /> 
                <p>{description2}</p> 
                <br /> 
                <p>{description3}</p> 
                <br /> 
                <p>{description4}</p> 
            </hgroup>
            <TextButton text={text} link={link} />
        </div>
    </section>
   ) 
}
export default section2