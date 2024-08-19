import React from "react"
import Main from "../../main/main";
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import Section2 from "../../sections/section2";
import Inmiddelsection from "../../sections/inmiddelsection";
import FlexItem from "../../sections/flexItem";
import Section1 from "../../sections/section1";
import recruitmentData from '../../../const/RecruitmentData'
import HomeData from "../../../const/homeData";



const Recruitment: React.FC = () => {
    return (
        <>
            <Imgmotionbg></Imgmotionbg>
            <Main
                {...recruitmentData.main}
            />
            <Section2
                {...recruitmentData.section2}
                direction='row'
                displayType="pargraph"
            />
            <Inmiddelsection
                {...recruitmentData.inmiddelsection}
                displayType='list'
            />
            <Section1
                {...recruitmentData.section1}
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
                {...recruitmentData.section2_2}
                direction="row"
                displayType="pargraph"
            />
        </>
    )
}
export default Recruitment;