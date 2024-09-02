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
import overonsData from '../../const/overonsData'
import FlexItem from "../../components/sections/flexItem";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import 'swiper/css/scrollbar';
import '../../components/sections/section.css'
import { Scrollbar } from 'swiper/modules';
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
        textAlign: 'end'
    }
};



const Workhardplayharder: React.FC = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isXSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
    const isXmediumDevice = useMediaQuery("only screen and (max-width : 1100px)");
    const isXLarglDevice = useMediaQuery("only screen and (min-width : 1400px)");
    const slidesPerView = isXSmallDevice ? 1.2 : isSmallDevice ? 1.7 : isXmediumDevice ? 2.8 : isXLarglDevice ? 6 : 4;
    isSmallDevice
    return (
        <>
            <Main {...workhardplayharderData.main} />
            <Inmiddelsection {...workhardplayharderData.inmiddelsection}
                displayType="pargraph"
            />
            <div className="min-h-[100vh]">
                <Slider>
                    <Section2 {...workhardplayharderData.section2} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                    <Section2 {...workhardplayharderData.section2_1} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                    <Section2 {...workhardplayharderData.section2_2} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                    <Section2 {...workhardplayharderData.section2_3} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                    <Section2 {...workhardplayharderData.section2_4} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                    <Section2 {...workhardplayharderData.section2_5} direction="row-reverse" displayType="pargraph" InViewSlider={true}>
                        <Buttons forwardSection={() => { }} backwardSection={() => { }} />
                    </Section2>
                </Slider>
            </div>
            <Inmiddelsection {...workhardplayharderData.inmiddelsection_1}
                displayType="pargraph"
                customStyles={customStyles}
            />
            <Section1 {...overonsData.Section1}>
                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}
                    slidesPerView={slidesPerView}
                    id="swiper-container"
                >
                    {overonsData.section1Flexitems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <FlexItem
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                Heading={item.Heading}
                                Paragraph={item.Paragraph}
                                sort={item.sort}
                                number={item.number}
                                numberAndSort={item.numberAndSort}
                                link={item.link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
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