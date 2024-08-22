import React from "react";
import Main from "../../components/main/main";
import Section2 from "../../components/sections/section2";
import Inmiddelsection from "../../components/sections/inmiddelsection";
import digitalbusinessstrategyData from "../../const/digitalbusinessstrategyData";

const Digitalbusinessstrategy: React.FC = () => {
    return(
        <>
        <Main {...digitalbusinessstrategyData.main}/>
        <Section2  
        {...digitalbusinessstrategyData.section2}
         direction='row'
          displayType= 'pargraph'
        />
        <Inmiddelsection
        {...digitalbusinessstrategyData.inmiddelsection}
         displayType='pargraph' />
        <Section2
        {...digitalbusinessstrategyData.section2_1}
        direction='row'
        displayType= 'pargraph'
      />
        </>
    )
}
export default Digitalbusinessstrategy;