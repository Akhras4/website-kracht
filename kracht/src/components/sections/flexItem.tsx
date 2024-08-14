import React from "react";
import './flexitem.css'

interface FlexItemProps{
    imageSrc: string;
    imageAlt: string;
    Heading:string;
    Paragraph:string;
    sort:string;
    number:number;
    numberAndSort:string;

}

const FlexItem:React.FC<FlexItemProps>=({
    imageSrc,
    imageAlt,
    Heading,
    Paragraph,
    sort,
    number,
    numberAndSort,
})=>{
    return (
        <>
        <div id ="flexitem">
            <img src={imageSrc} alt={imageAlt} style={{width:'100%', height:'80%',borderRadius:'20px'}} />
            <div className="flexitemtext">
                <div className="flex"><h2 style={{color:numberAndSort,marginRight:'8px'}}>0{number}.</h2><h2>{Heading}</h2></div>
                <p className="paragraph-text">{Paragraph}</p>
                <p style={{color:numberAndSort}}>{sort}</p>
            </div>
        </div>
        </>
    )}
    export default FlexItem