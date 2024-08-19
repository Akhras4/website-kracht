import'../../App.css'
import Header from '../header/header'
import Mobilenavbar from '../header/Mobilenavbar'
import Light from '../light/light'
import Main from '../main/main'
import Section1 from '../sections/section1'
import Section2 from '../sections/section2'
import kantoor1 from '../../assets/img/section2/kracht-brandshoot-1.webp'
import kantoor2 from '../../assets/img/section2/kract-brandshoot-2.webp'
import FlexItem from "../sections/flexItem";
import digitaletransform from '../../assets/img/section1flexitem/krachtkantoor.webp'
import demandleadgen from '../../assets/img/section1flexitem/karctbranndshot.webp'
import ecommerce from '../../assets/img/section1flexitem/ecom.webp'
import reccruitment from '../../assets/img/section1flexitem/krachtdeman.webp'
import Section3 from '../sections/section3'
import Footer from '../footer/footer'
import Emailms from '../emailms/eamilms'
import barnd1 from '../../assets/img/section1flexitem/brandshoot-1.jpeg'
import barnd2 from '../../assets/img/section1flexitem/brandshoot-2.jpeg'
import barnd3 from '../../assets/img/section1flexitem/brandshoot-3.jpeg'
import barnd4 from '../../assets/img/section1flexitem/brand-4.jpeg'

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
      <Header />
      <Mobilenavbar />
      <Main
      imageSrc="https://d30yna6yll9wpi.cloudfront.net/niice/Brandshoot-2024/_1000x1000_crop_center-center_100_none/Niice-brandshoot-87.jpeg"
      imageAlt="kract brandshoot 87"
      title="discover"
      title1="your"
      title2="digital"
      title3="happiness"
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
       link='/thema/digitale-transformatie'
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
       link='/thema/demand-leadgeneration'
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
       link='/thema/e-commerce'
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
       link='/thema/recruitment'
      /> 
      </Section1>
      

      <Section2 
      titlePargraf=""
      title='Voor elk vraagstuk een oplossing'
      description={['Ben jij klaar voor de volgende stap met jouw bedrijf? Klaar voor meer werknemers, sales, klanten? Laten we samenwerken aan je vraagstuk.'
      ,'Al tijdens onze eerste gesprekken brengen we samen jouw doelen helder in kaart en werken we een doordachte strategie uit. Met de plannen die daaruit volgen brengen we die stip op je horizon binnen handbereik.'
      ,'Terwijl jij focust op dat waar jij goed in bent, combineren wij design, development, copy, data, foto- en videografie tot de beste mix voor jou.'
      ,'Die combinatie en de route zijn elke keer anders. Onze werkwijze niet.'
      ]}
      link=''
      text='dit is onze werkwijze'
      direction='row'
      imgSrc = {kantoor1}
      imgAlt='kantoor1'
      displayType= 'pargraph'
       />

<Section1
      titelSection1='Jouw digital business'
      titelSection2='partner voor elke'
      titelSection3=' uitdaging'
      titelDisc=""
      >
        <FlexItem 
      imageSrc={barnd1}
      imageAlt={barnd1}
       Heading=' Digital business strategy'
       Paragraph='
        Hoe genereer je meer verkeer, hoe krijg je meer mensen in de winkel? Hoe kunnen we in minder tijd meer omzet realiseren? Wat is je strategie en focus je op het verhogen van je omzet, of kunnen we meer resultaat halen door automatisering en optimalisering?
       In de snel veranderende digitale wereld sta je als bedrijf voor grote uitdagingen. Maar niet alleen!
       Wij duiken met jou de diepte in, gaan verder en werken samen aan digital happiness.
       digital business strategy'
       sort='Digital business strategy'
       number={1}
       numberAndSort='#535bf2'
       link='/thema/digitale-transformatie/'
      /> 
      <FlexItem 
      imageSrc={barnd2}
      imageAlt={barnd2}
       Heading=' Digital marketing'
       Paragraph=' Wil jij met jouw organisatie de next step zetten om je ambities te realiseren? Wil je grip op jouw cijfers om verder op te schalen, opvallen binnen een gesatureerde markt, resultaten zien van je inspanningen? Of wil je eindelijk echt kwalitatieve leads aantrekken?
        Of je nu focust op verkoop, diensten of het werven van werknemers; Niice staat klaar om je online zichtbaarheid en aanwezigheid te versterken. Samen werken we aan jouw digital happiness.
        digital marketing'
       sort='Digital marketing'
       number={2}
       numberAndSort='#535bf2'
       link='/thema/digitale-transformatie/'
      /> 
      <FlexItem 
      imageSrc={barnd3}
      imageAlt={barnd3}
       Heading=' Design en technology'
       Paragraph='In de snel veranderende digitale wereld sta je als bedrijf voor grote uitdagingen. Hoe realiseer je een digitale aanwezigheid die niet alleen je merk weerspiegelt, maar ook je bedrijfsresultaten verbetert?
          Als jouw digital business partner denkt Niice mee vanuit jouw bedrijf en gaan we verder dan die mooie website, snelle webshop of innovatieve webapplicatie.
          Wij duiken met jou de diepte in en werken samen aan digital happiness.'
       sort='design en technology'
       number={3}
       numberAndSort='#535bf2'
       link='/thema/digitale-transformatie/'
      /> 
      <FlexItem 
      imageSrc={barnd4}
      imageAlt={barnd4}
       Heading=' Social content'
       Paragraph='Continu online zichtbaar zijn. Het is noodzaak, ook voor jou. Maar… hoe? Waar haal je de tijd, inspiratie en kunde vandaan om content te maken die gezien wordt? Hoe haal je alles uit social media? Waar moet je eigenlijk aanwezig zijn?
          Content creëren die echt opvalt is een vak apart. Het is het vak van ons zusterbedrijf Liike. En door die content slim weg te zetten, kom jij steeds dichter bij digital happiness.
          Hoe? We denken graag met je mee! Laten we kennismaken, dan laten wij je zien wat jouw mogelijkheden zijn.'
       sort='Social content'
       number={4}
       numberAndSort='#535bf2'
       link='/thema/digitale-transformatie/'
      /> 
      </Section1>

      <Section3 />
      <Section2 
      titlePargraf=""
      title='Voor elk vraagstuk een oplossing'
      description={['Ben jij klaar voor de volgende stap met jouw bedrijf? Klaar voor meer werknemers, sales, klanten? Laten we samenwerken aan je vraagstuk.'
      ,'Al tijdens onze eerste gesprekken brengen we samen jouw doelen helder in kaart en werken we een doordachte strategie uit. Met de plannen die daaruit volgen brengen we die stip op je horizon binnen handbereik.'
      ,'Terwijl jij focust op dat waar jij goed in bent, combineren wij design, development, copy, data, foto- en videografie tot de beste mix voor jou.'
      ,'Die combinatie en de route zijn elke keer anders. Onze werkwijze niet.'
    ]}
      link=''
      text='dit is onze werkwijze'
      direction='row-reverse'
      imgSrc = {kantoor2}
      imgAlt='kantoor1'
      displayType= 'pargraph'
       />
     <Emailms />
     <Footer />
</>
  )
}

export default Home
