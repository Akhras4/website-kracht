import designentechnologyData from '../../const/designentechnologyData'
import React from "react";
import Main from "../../components/main/main";
import Section2 from "../../components/sections/section2";
import Inmiddelsection from "../../components/sections/inmiddelsection";
const Designentechnology:React.FC=()=>{
    return(
        <>
        <Main {...designentechnologyData.main}/>
        <Inmiddelsection
        {...designentechnologyData.inmiddelsection}
         displayType='pargraph' />
        <Section2  
        {...designentechnologyData.section2}
         direction='row'
          displayType= 'pargraph'
        />
        <Inmiddelsection
        {...designentechnologyData.inmiddelsection_1}
         displayType='pargraph' />
        
        <Section2
        {...designentechnologyData.section2_1}
        direction='row-reverse'
        displayType= 'pargraph'
      />
      </>
     
    )
}
export default Designentechnology