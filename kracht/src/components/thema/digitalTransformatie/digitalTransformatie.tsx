import React from "react"
import Main from "../../main/main";
import Section2 from "../../sections/section2";
import Inmiddelsection from "../../sections/inmiddelsection";
import digitalTransformatieData from '../../../const/DigitalTransformatieData'


const DigitalTransformatie: React.FC = () => {
  return (
    <>
      <Main
        {...digitalTransformatieData.main}
      />
      <Section2
      {...digitalTransformatieData.section2}
        direction='row'
        displayType= 'pargraph'
      />
      <Inmiddelsection
       {...digitalTransformatieData.inmiddelsection}
        displayType='pargraph'
      />
      <Section2
        {...digitalTransformatieData.section2_2}
        direction='row-reverse'
        displayType= 'pargraph'
      />
      <Section2
        {...digitalTransformatieData.section2_3}
        direction='row'
        displayType= 'pargraph'
      />
      <Inmiddelsection
        {...digitalTransformatieData.inmiddelsection2}
        displayType='list'
      />
      <Section2
       {...digitalTransformatieData.section2_4}
        direction='row-reverse'
        displayType= 'pargraph'
      />
    </>
  )
}
export default DigitalTransformatie