import React from "react";
import overonsData from "../../const/overons";
import Section4 from "../../components/sections/section4";
import Section2 from '../../components/sections/section2'
import Main from '../../components/main/main';
import Inmiddelsection from "../../components/sections/inmiddelsection";
import socialcontentData from '../../const/socialcontentData'
import Imgmotionbg from "../../components/imgmotionbg/imgmotionbg";
import Section1 from "../../components/sections/section1";
import FlexItem from "../../components/sections/flexItem";
import { CustomStyles } from '../../components/sections/inmiddelsection'
const customStyles: CustomStyles = {
        container: {
                flexDirection: 'row',
                textAlign: 'end',
        },
        pStyle: {
                alignSelf: 'center', 
        },
        tittlePargraph: {
                whiteSpace: 'nowrap'
        }
};
const Overons: React.FC = () => {
        return (
                <>
                        <Main {...overonsData.main} />
                        <Imgmotionbg />
                        <Inmiddelsection {...overonsData.inmiddelsection} displayType="pargraph" />
                        <Section4
                                {...overonsData.section4}
                        />
                        <Section4
                                {...overonsData.section4_1}
                        />
                        <Inmiddelsection {...overonsData.inmiddelsection_1} displayType="pargraph" />
                        <Inmiddelsection {...overonsData.inmiddelsection_2} displayType="pargraph" customStyles={customStyles} />
                        <Section1
                                {...overonsData.Section1}
                        >
                                {overonsData.section1Flexitems.map((item, index) => (
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
                </>
        );
}
export default Overons