import React from 'react'
import TextButton from '../TextButton/TextButton';
import './section2.css'


interface section2Props{
    titlePargraf: string;
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
    titlePargraf,

})=>{
   
   return(
    <section className='section2'>
          {direction==='row-reverse'? (
            <>
             <div className='part2'>
             <hgroup>
                {titlePargraf ?<p id='titlePargraf'>{titlePargraf}</p> : null}
                 <h1>{title}</h1>
                 <br /> 
                 <p>{description1}</p>
                 <br /> 
                 <p>{description2}</p> 
                 <br /> 
                 <p dangerouslySetInnerHTML={{ __html: description3 }}></p> 
                 <br /> 
                 <p>{description4}</p> 
             </hgroup>
             <TextButton text={text} link={link} />
         </div>
            <div className='part1'>
            <img src={imgSrc} alt={imgAlt} />
           </div>
          </>
          ) : (
            <>
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
                            <p dangerouslySetInnerHTML={{ __html: description3 }}></p> 
                            <br /> 
                            <p>{description4}</p> 
                        </hgroup>
                        { text ? ( <TextButton text={text} link={link} />):(null)}
                       
                    </div>
                    
                    </>
                    )}
    </section>
   ) 
}
export default section2