import React from "react"
import Main from "../../components/main/main"
import Section2 from "../../components/sections/section2"
import Inmiddelsection from "../../components/sections/inmiddelsection"
import werkwijzeData from "../../const/werkwijzeData"
const Werkwijze: React.FC=()=>{
    return(
        <>
        <Main {...werkwijzeData.main}/>
        <Inmiddelsection {...werkwijzeData.inmiddelsection} 
        displayType="list"/>
        <Section2 {...werkwijzeData.section2} 
        direction="row"
        displayType="pargraph"
        />
        <Inmiddelsection {...werkwijzeData.inmiddelsection_1} 
        displayType="list"/>
         <Section2 {...werkwijzeData.section2_1} 
        direction="row-reverse"
        displayType="pargraph"
        />
        <Inmiddelsection {...werkwijzeData.inmiddelsection_2}
        displayType="pargraph"/>
        <div className="w-full h-auto my-9 relative">
            <img src={werkwijzeData.imgcon.imgSrc} alt={werkwijzeData.imgcon.imgAlt} />
        </div>
        <Inmiddelsection {...werkwijzeData.inmiddelsection_3}
        displayType="pargraph"/>
         <Section2 {...werkwijzeData.section2_2} 
        direction="row-reverse"
        displayType="pargraph"
        />
        </>
        
    )
}
export default Werkwijze