import'../../App.css'
import Light from '../../components/light/light'
import Section1 from '../../components/sections/section1'
import Section2 from '../../components/sections/section2'
import FlexItem from "../../components/sections/flexItem";
import Section3 from '../../components/sections/section3'
import Main from '../../components/main/main';
import HomeData from '../../const/homeData'
import Inmiddelsection from '../../components/sections/inmiddelsection';



function Home() {

  return (
        <>
      <Light
        id="light"
        className="top-0 right-0 z-[2]"
        initial={{ x: '10%', y: '10%' }}
        animate={{ x: ['-250%', '10%', '-50%'], y: ['-10%', '30%', '100%'] }}
        transition={{
          duration: 9,
          ease: ['easeOut', 'linear', 'easeIn'],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <Light
        id="light2"
        className="top-0 left-0 z-[2]"
        initial={{ x: '50%', y: '50%' }}
        animate={{ x: ['-150%', '30%', '-50%'], y: ['100%', '-30%', '100%'] }}
        transition={{
          duration: 9,
          ease: ['easeOut', 'linear', 'easeIn'],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <Main
      {...HomeData.main}
    />
     <Section1
       {...HomeData.FirstSection1}
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
      {...HomeData.section2}
      direction='row'
      displayType= 'pargraph'
       />
<Section1
{...HomeData.secondSection1}
      >
       {HomeData.SecondSection1Flexitems.map((item, index) => (
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
      <Section3 />
      <Inmiddelsection {...HomeData.Inmiddelsection}
      displayType='pargraph' 
      />
      <Section2 
      {...HomeData.section2_1}
      direction='row-reverse'
      displayType= 'pargraph'
       />
</>
  )
}

export default Home
