import React from "react";
import overonsData from "../../const/overons";
import Section4 from "../../components/sections/section4";
const Overons:React.FC=()=>{
    return (
        <>
<Section4 
{...overonsData.section4 }
/>
        </>
        );
}
export default Overons