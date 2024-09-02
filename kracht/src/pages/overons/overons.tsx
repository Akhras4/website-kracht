import React from "react";
import overonsData from "../../const/overonsData";
import Section4 from "../../components/sections/section4";
import Main from '../../components/main/main';
import Inmiddelsection from "../../components/sections/inmiddelsection";
import Section1 from "../../components/sections/section1";
import FlexItem from "../../components/sections/flexItem";
import { CustomStyles } from '../../components/sections/inmiddelsection'
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
                whiteSpace: 'nowrap'
        }
};
const Overons: React.FC = () => {
        const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
        const isXSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
        const isXmediumDevice = useMediaQuery("only screen and (max-width : 1100px)");
        const isXLarglDevice = useMediaQuery("only screen and (min-width : 1400px)");
        const slidesPerView = isXSmallDevice ? 1.2 : isSmallDevice ? 1.7 : isXmediumDevice ? 2.8 : isXLarglDevice ? 6 : 4;
        isSmallDevice
        return (
                <>
                        <Main {...overonsData.main} />
                        <Inmiddelsection {...overonsData.inmiddelsection} displayType="pargraph" />
                        <Section4
                                {...overonsData.section4}
                        />
                        <Section4
                                {...overonsData.section4_1}
                        />
                        <Inmiddelsection {...overonsData.inmiddelsection_1} displayType="pargraph" />
                        <Inmiddelsection {...overonsData.inmiddelsection_2} displayType="pargraph" customStyles={customStyles} />
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
                </>
        );
}
export default Overons