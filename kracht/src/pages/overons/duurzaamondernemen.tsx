import React from "react"
import Main from "../../components/main/main"
import Inmiddelsection from "../../components/sections/inmiddelsection"
import Section2 from "../../components/sections/section2"
import duurzaamondernemenData from '../../const/duurzaamondernemenData'
import { CustomStyles } from '../../components/sections/inmiddelsection'
import Slider from "../../components/slider/slider"
import Buttons from "../../components/buttons/buttons"
import HomeData from "../../const/homeData"
const customStyles: CustomStyles = {
    container: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
    },
    tittlePargraph: {
            whiteSpace: 'nowrap',
            textAlign: 'center',
    }
};

const Duurzaamondernemen: React.FC =()=>{
    
    return (
        <>
        <Main {...duurzaamondernemenData.main} />
        <Inmiddelsection {...duurzaamondernemenData.inmiddelsection}
        displayType="pargraph" />
        <Section2 {...duurzaamondernemenData.section2}
        displayType="pargraph"
        direction="row"
         />
         <Inmiddelsection {...duurzaamondernemenData.inmiddelsection_1}
         displayType="pargraph" 
         customStyles={customStyles} 
         />
         <Slider >
         <Section2 {...HomeData.section2} direction="row-reverse" displayType="pargraph">
         <Buttons forwardSection={() => {}} backwardSection={() => {}} />
            </Section2>
            <Section2 {...HomeData.section2_1} direction="row-reverse" displayType="pargraph">
            <Buttons forwardSection={() => {}} backwardSection={() => {}} />
              </Section2>
       </Slider>
        </>
    )
}
export default Duurzaamondernemen