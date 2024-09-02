import React from "react";
import Main from "../../main/main";
import Section2 from "../../sections/section2";
import Section1 from "../../sections/section1";
import FlexItem from "../../sections/flexItem";



import HomeData from "../../../const/homeData";
import ecommerceData from "../../../const/Ecommerceconst";


const Ecommerce : React.FC = () => {
    return (
        <>
        <Main
         {...ecommerceData.main}
        />
        <Section2
          {...ecommerceData.section2_1}
          direction='row'
          displayType= 'pargraph'
        />

  
        <Section2
          {...ecommerceData.section2_2}
          direction='row-reverse'
          displayType= 'list'
        />
             <Section1
                {...ecommerceData.section1}
                >
    {HomeData.FirstSection1Flexitems.map((item,index)=>(
                    <FlexItem 
                    key={index}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    Heading={item.Heading}
                    Paragraph={item.Paragraph}
                    sort={item.sort}
                    number={item.number}
                    numberAndSort={item.numberAndSort}
                    link={item.link}
                />
       ))} 
      </Section1>
        <Section2
          {...ecommerceData.section2_3}
          direction='row-reverse'
          displayType= 'pargraph'
        />
      </>
    )
  }

export default Ecommerce