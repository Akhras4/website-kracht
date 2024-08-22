import digitalmarketingData from '../../const/digitalmarketingData'
import React from "react";
import Main from "../../components/main/main";
import Section2 from "../../components/sections/section2";
import Inmiddelsection from "../../components/sections/inmiddelsection";
const Digitalmarketing:React.FC=()=>{
    return(
        <>
        <Main {...digitalmarketingData.main}/>
        <Inmiddelsection
        {...digitalmarketingData.inmiddelsection}
         displayType='pargraph' />
        <Section2  
        {...digitalmarketingData.section2}
         direction='row'
          displayType= 'pargraph'
        />
        <Inmiddelsection
        {...digitalmarketingData.inmiddelsection_1}
         displayType='pargraph' />
        
        <Section2
        {...digitalmarketingData.section2_1}
        direction='row-reverse'
        displayType= 'pargraph'
      />
      </>
     
    )
}
export default Digitalmarketing
