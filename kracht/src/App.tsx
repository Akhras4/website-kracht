
import './App.css'
import Header from './components/header/header'
import Mobilenavbar from './components/header/Mobilenavbar'
import Light from './components/light/light'
import Main from './components/main/main'
import Section1 from './components/sections/section1'
import Section2 from './components/sections/section2'
import kantoor1 from './assets/img/section2/kracht-brandshoot-1.webp'
import kantoor2 from './assets/img/section2/kract-brandshoot-2.webp'
import FlexItem from "./components/sections/flexItem";
import digitaletransform from './assets/img/section1flexitem/krachtkantoor.webp'
import demandleadgen from './assets/img/section1flexitem/karctbranndshot.webp'
import ecommerce from './assets/img/section1flexitem/ecom.webp'
import reccruitment from './assets/img/section1flexitem/krachtdeman.webp'

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
      >
        <FlexItem 
      imageSrc={digitaletransform}
      imageAlt={digitaletransform}
       Heading=' Digitale transformatie'
       Paragraph='De wereld verandert sneller dan ooit tevoren. Juist nu is het essentieel voor bedrijven die voorop willen lopen en in de toekomst relevant willen blijven om hun digitale infrastructuur in kaart te brengen. Om te innoveren. Om processen te optimaliseren, automatiseren en om inzichten te creëren op basis van data. Digitaal transformeren dus.
       Als jouw digitale business partner denken wij mee van begin tot eind en geven we samen je transformatie vorm. Waarom? Om te voorkomen dat je wordt ingehaald door concurrenten of de nieuwe generatie. Om waarde toe te blijven voegen voor je collegas. Om marges te vergroten en taken te vereenvoudigen, zodat je team zich kan richten op waardevollere werkzaamheden. Én om een sterke binding en behoud van medewerkers te garanderen.'
       sort='digitale transformatie'
       number={1}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={demandleadgen}
      imageAlt={demandleadgen}
       Heading=' Demand & lead generation'
       Paragraph='Wil jij grip krijgen op een oneindige stroom aan leads? Lukt het niet om de juiste doelgroep aan te trekken? Komen de leads wel binnen, maar zijn deze niet kwalitatief genoeg voor sales om op te volgen?
                       Wij denken mee over je hele business en weten met een doelgerichte aanpak de juiste mensen of bedrijven aan te trekken.'
       sort='Demand & lead generation'
       number={2}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={ecommerce}
      imageAlt={ecommerce}
       Heading=' E-commerce'
       Paragraph='Bied je fantastische producten aan, maar krijg je ze niet aan de man? Gaat veel van je budget naar advertenties, zonder dat je daar resultaten van terug ziet? Wil je grip op de cijfers krijgen om verder op te schalen; niet alleen op omzet, maar ook écht op resultaat sturen?
               Als jouw business partner denken wij mee over je hele e-commerce business en zorgen we met een doelgerichte aanpak voor digital happiness.'
       sort='E-commerce'
       number={3}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={reccruitment}
      imageAlt={reccruitment}
       Heading=' Recruitment marketing'
       Paragraph='Is je bedrijf erg gegroeid en heb je meer werk dan werknemers? Het aantrekken en vasthouden van talent is en wordt steeds lastiger. Passief vacatures plaatsen werkt niet meer, je hebt een strategische aanpak nodig. Proactief werven, tijd voor recruitment marketing.
        Wij gaan verder dan traditionele werving, combineren de kracht van branding, marketing, data en technologie om de juiste kandidaten te bereiken.
       recruitment marketing'
       sort='Recruitment marketing'
       number={4}
       numberAndSort='#535bf2'
      /> 
      </Section1>
      

      <Section2 
      title='Voor elk vraagstuk een oplossing'
      description1='Ben jij klaar voor de volgende stap met jouw bedrijf? Klaar voor meer werknemers, sales, klanten? Laten we samenwerken aan je vraagstuk.'
      description2='Al tijdens onze eerste gesprekken brengen we samen jouw doelen helder in kaart en werken we een doordachte strategie uit. Met de plannen die daaruit volgen brengen we die stip op je horizon binnen handbereik.'
      description3='Terwijl jij focust op dat waar jij goed in bent, combineren wij design, development, copy, data, foto- en videografie tot de beste mix voor jou.'
      description4='Die combinatie en de route zijn elke keer anders. Onze werkwijze niet.'
      link=''
      text='dit is onze werkwijze'
      direction='row'
      imgSrc = {kantoor1}
      imgAlt='kantoor1'
       />

<Section1
      titelSection1='Jouw digital business'
      titelSection2='partner voor elke'
      titelSection3=' uitdaging'
      titelDisc=""
      >
        <FlexItem 
      imageSrc={digitaletransform}
      imageAlt={digitaletransform}
       Heading=' Digitale transformatie'
       Paragraph='De wereld verandert sneller dan ooit tevoren. Juist nu is het essentieel voor bedrijven die voorop willen lopen en in de toekomst relevant willen blijven om hun digitale infrastructuur in kaart te brengen. Om te innoveren. Om processen te optimaliseren, automatiseren en om inzichten te creëren op basis van data. Digitaal transformeren dus.
       Als jouw digitale business partner denken wij mee van begin tot eind en geven we samen je transformatie vorm. Waarom? Om te voorkomen dat je wordt ingehaald door concurrenten of de nieuwe generatie. Om waarde toe te blijven voegen voor je collegas. Om marges te vergroten en taken te vereenvoudigen, zodat je team zich kan richten op waardevollere werkzaamheden. Én om een sterke binding en behoud van medewerkers te garanderen.'
       sort='digitale transformatie'
       number={1}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={demandleadgen}
      imageAlt={demandleadgen}
       Heading=' Demand & lead generation'
       Paragraph='Wil jij grip krijgen op een oneindige stroom aan leads? Lukt het niet om de juiste doelgroep aan te trekken? Komen de leads wel binnen, maar zijn deze niet kwalitatief genoeg voor sales om op te volgen?
                       Wij denken mee over je hele business en weten met een doelgerichte aanpak de juiste mensen of bedrijven aan te trekken.'
       sort='Demand & lead generation'
       number={2}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={ecommerce}
      imageAlt={ecommerce}
       Heading=' E-commerce'
       Paragraph='Bied je fantastische producten aan, maar krijg je ze niet aan de man? Gaat veel van je budget naar advertenties, zonder dat je daar resultaten van terug ziet? Wil je grip op de cijfers krijgen om verder op te schalen; niet alleen op omzet, maar ook écht op resultaat sturen?
               Als jouw business partner denken wij mee over je hele e-commerce business en zorgen we met een doelgerichte aanpak voor digital happiness.'
       sort='E-commerce'
       number={3}
       numberAndSort='#535bf2'
      /> 
      <FlexItem 
      imageSrc={reccruitment}
      imageAlt={reccruitment}
       Heading=' Recruitment marketing'
       Paragraph='Is je bedrijf erg gegroeid en heb je meer werk dan werknemers? Het aantrekken en vasthouden van talent is en wordt steeds lastiger. Passief vacatures plaatsen werkt niet meer, je hebt een strategische aanpak nodig. Proactief werven, tijd voor recruitment marketing.
        Wij gaan verder dan traditionele werving, combineren de kracht van branding, marketing, data en technologie om de juiste kandidaten te bereiken.
       recruitment marketing'
       sort='Recruitment marketing'
       number={4}
       numberAndSort='#535bf2'
      /> 
      </Section1>


      <Section2 
      title='Voor elk vraagstuk een oplossing'
      description1='Ben jij klaar voor de volgende stap met jouw bedrijf? Klaar voor meer werknemers, sales, klanten? Laten we samenwerken aan je vraagstuk.'
      description2='Al tijdens onze eerste gesprekken brengen we samen jouw doelen helder in kaart en werken we een doordachte strategie uit. Met de plannen die daaruit volgen brengen we die stip op je horizon binnen handbereik.'
      description3='Terwijl jij focust op dat waar jij goed in bent, combineren wij design, development, copy, data, foto- en videografie tot de beste mix voor jou.'
      description4='Die combinatie en de route zijn elke keer anders. Onze werkwijze niet.'
      link=''
      text='dit is onze werkwijze'
      direction='row-reverse'
      imgSrc = {kantoor2}
      imgAlt='kantoor1'
       />
      
    </div>
  )
}

export default App
