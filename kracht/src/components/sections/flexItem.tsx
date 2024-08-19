import React from "react";
import './flexitem.css'
import { Link } from "react-router-dom";

interface FlexItemProps{
    imageSrc: string;
    imageAlt: string;
    Heading:string;
    Paragraph:string;
    sort:string;
    number:number;
    numberAndSort:string;
    link:string

}

const FlexItem:React.FC<FlexItemProps>=({
    imageSrc,
    imageAlt,
    Heading,
    Paragraph,
    sort,
    number,
    numberAndSort,
    link
})=>{
    return (
        <>
        <div id ="flexitem">
            <img src={imageSrc} alt={imageAlt} style={{width:'100%', height:'80%',borderRadius:'20px'}} />
            <div className="flexitemtext">
                <div className="flex"><h2 style={{color:numberAndSort,marginRight:'8px'}}>0{number}.</h2><h2>{Heading}</h2></div>
                <p className="paragraph-text">{Paragraph}</p>
                <Link to={link} >
                <button className="sort" style={{color:numberAndSort}}>
                {sort}
                    <svg width="30px" height="8px" viewBox="0 0 30 8" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <g id="⏺️-Icons-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="rightarrow" transform="translate(-0.000000, 0.000000)" fill="currentColor">
                                <rect id="Rectangle" x="0" y="3" width="24" height="2"></rect>
                                <polygon id="Triangle" transform="translate(26.500000, 4.000000) scale(-1, 1) rotate(-90.000000) translate(-26.500000, -4.000000)" points="26.5 1 30 7 23 7"></polygon>
                            </g>
                        </g>
                    </svg>
                </button>
                </Link>
            </div>
        </div>
        </>
    )}
    export default FlexItem