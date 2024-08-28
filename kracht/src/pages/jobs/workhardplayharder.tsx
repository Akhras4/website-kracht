import React from "react";
import Section4 from "../../components/sections/section4";
import Section2 from "../../components/sections/section2";
import Main from "../../components/main/main";
import Inmiddelsection from "../../components/sections/inmiddelsection";
import workhardplayharderData from "../../const/workhardplayharderData";
import Slider from "../../components/slider/slider";
import Buttons from "../../components/buttons/buttons";
import { CustomStyles } from '../../components/sections/inmiddelsection'
import Section1 from "../../components/sections/section1";
import overonsData from '../../const/overons'
import FlexItem from "../../components/sections/flexItem";
const customStyles: CustomStyles = {
    container: {
        flexDirection: 'row',
        textAlign: 'end',
            },
            pStyle: {
                    alignSelf: 'center',
            },
            tittlePargraph: {
                    whiteSpace: 'nowrap',
                    textAlign:'end'
            }
};



const Workhardplayharder: React.FC = () => {
    return (
        <>
            <Main {...workhardplayharderData.main} />
            <Inmiddelsection {...workhardplayharderData.inmiddelsection}
                displayType="pargraph" />
            <Slider>
                <Section2 {...workhardplayharderData.section2} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
                <Section2 {...workhardplayharderData.section2_1} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
                <Section2 {...workhardplayharderData.section2_2} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
                <Section2 {...workhardplayharderData.section2_3} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
                <Section2 {...workhardplayharderData.section2_4} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
                <Section2 {...workhardplayharderData.section2_5} direction="row-reverse" displayType="pargraph">
                    <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                </Section2>
            </Slider>
            <Inmiddelsection {...workhardplayharderData.inmiddelsection_1}
                displayType="pargraph"
                customStyles={customStyles}
            />
            <Section1 {...overonsData.Section1}>
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
            <Section4 {...workhardplayharderData.section4} />
            <Inmiddelsection {...workhardplayharderData.inmiddelsection_2}
                displayType="pargraph" />
            <Inmiddelsection {...workhardplayharderData.inmiddelsection_3}
                displayType="pargraph"
                customStyles={customStyles}
            />
        </>
    );
}
export default Workhardplayharder