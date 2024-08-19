import React from "react"
import Main from "../../main/main";
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import Inmiddelsection from "../../sections/inmiddelsection";
import Section2 from "../../sections/section2";
import FlexItem from "../../sections/flexItem";
import Section1 from "../../sections/section1";

import demandAndLeadGenerationData from '../../../const/demandAndLeadGenerationData'
import HomeData from "../../../const/homeData";


const DemandAndLeadGeneration: React.FC = () => {
  return (
    <>
      <Imgmotionbg></Imgmotionbg>
      <Main
        {...demandAndLeadGenerationData.main}
      />
      <Inmiddelsection
        {...demandAndLeadGenerationData.inmiddelsection}
        displayType='pargraph'
      />
      <Section2
        {...demandAndLeadGenerationData.section2}
        direction='row'
        displayType='list'
      />
      <Section1
        {...demandAndLeadGenerationData.section1}
      >
        {HomeData.FirstSection1Flexitems.map((item, index) => (
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
        {...demandAndLeadGenerationData.section2_2}
        direction='row'
        displayType='pargraph'
      />

    </>
  )
}
export default DemandAndLeadGeneration