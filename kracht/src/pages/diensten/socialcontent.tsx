import socialcontentData from '../../const/socialcontentData'
import React from "react";
import Main from "../../components/main/main";
import Section2 from "../../components/sections/section2";
import Inmiddelsection from "../../components/sections/inmiddelsection";
const Socialcontent:React.FC=()=>{
    return(
        <>
        <Main {...socialcontentData.main}/>
        <Inmiddelsection
        {...socialcontentData.inmiddelsection}
         displayType='pargraph' />
        <Section2  
        {...socialcontentData.section2}
         direction='row'
          displayType= 'pargraph'
        />
        <Inmiddelsection
        {...socialcontentData.inmiddelsection_1}
         displayType='pargraph' />
        
        <Section2
        {...socialcontentData.section2_1}
        direction='row-reverse'
        displayType= 'pargraph'
      />
      </>
     
    )
}
export default Socialcontent