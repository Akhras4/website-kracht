
import './App.css'
import Header from './components/header/header'
import Mobilenavbar from './components/header/Mobilenavbar'
import Light from './components/light/light'
import Main from './components/main/main'
import Section1 from './components/sections/section1'

function App() {

  return (
    <div className='App'>
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

      <Light
        id="light3"
        className="bottom-10 left-10 z-[2]"
        initial={{ x: '-20%', y: '-20%' }}
        animate={{ x: ['100%', '-10%', '100%'], y: ['-10%', '-100%', '-10%'] }}
        transition={{
          duration: 9,
          ease: ['easeOut', 'linear', 'easeIn'],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </>
      <Header />
      <Mobilenavbar />
      <Main
      imageSrc="https://d30yna6yll9wpi.cloudfront.net/niice/Brandshoot-2024/_1000x1000_crop_center-center_100_none/Niice-brandshoot-87.jpeg"
      imageAlt="kract brandshoot 87"
      title="discover"
      subtitle="your"
      description="Kwalitatieve leads genereren, je producten online aan de man brengen, succesvol medewerkers aantrekken, bedrijfsprocessen optimaliseren of je online aanwezigheid nog sterker, beter maken? Wat je doel ook is, wij hebben de kennis, de ervaring en het team om jou vooruit te helpen."
      buttonText="ontdek onze werkwijze"
      buttonLink="/over-ons/werkwijze/"
    />
     <Section1
      titelSection1='Jouw digital business'
      titelSection2='partner voor elke'
      titelSection3=' uitdaging'
      titelDisc=""
      />
    </div>
  )
}

export default App
