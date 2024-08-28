import React from 'react'
import Main from '../../components/main/main'
import Section2 from '../../components/sections/section2'
import contactData from '../../const/contactData'
import Inmiddelsection from '../../components/sections/inmiddelsection'
import FlexItem from '../../components/sections/flexItem'
import { CustomStyles } from '../../components/sections/inmiddelsection'
import Contactform from '../../components/form/contactform'
const Contact:React.FC=()=>{
    const customStyles: CustomStyles = {
        container: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex:55
        },
        pStyle: {
                alignSelf: 'center',
        },
        tittlePargraph: {
                whiteSpace: 'nowrap',
                textAlign: 'center',
        }
};
    return(
        <>
           <Main {...contactData.main} />
           <Section2 {...contactData.section2} 
           direction='row'
           displayType='pargraph'
            childType='form'>
            <Contactform />
            </Section2>
           <Inmiddelsection {...contactData.inmiddelsection} 
           displayType="pargraph" customStyles={customStyles}
           />
           <div className="flex flex-col w-full sm:flex-row md:flex-wrap lg:flex-nowrap -mt-20 z-[9999] ml-4">
                {contactData.flexitems.map((item, index) => (
                    <div className="sm:w-full md:w-1/2 lg:w-1/3  z-[9999] parent-div" key={index}>
                    <FlexItem {...item} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default  Contact
