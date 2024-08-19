import React from "react"
import Header from "../../header/header"
import Main from "../../main/main";
import Mobilenavbar from "../../header/Mobilenavbar";
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import Demand from '../../../assets/img/Demandandleadgeneration/brandshoot-84.jpeg' 
import Inmiddelsection from "../../sections/inmiddelsection";
import Section2 from "../../sections/section2";
import FlexItem from "../../sections/flexItem";
import Footer from "../../footer/footer";
import Section1 from "../../sections/section1";

import barnd1 from '../../../assets/img/section1flexitem/brandshoot-1.jpeg'
import barnd2 from '../../../assets/img/section1flexitem/brandshoot-2.jpeg'
import barnd3 from '../../../assets/img/section1flexitem/brandshoot-3.jpeg'
import barnd4 from '../../../assets/img/section1flexitem/brand-4.jpeg'

import kantoor1Section from '../../../assets/img/Demandandleadgeneration/kracht.jpg'
import kantoorSection from '../../../assets/img/Demandandleadgeneration/brandshoot-67.jpeg'

import Emailms from "../../emailms/eamilms";

const DemandAndLeadGeneration : React.FC = () => {
    return (
        <>
        <Header />
        <Mobilenavbar />
        <Imgmotionbg></Imgmotionbg>
        <Main
          imageSrc={Demand}
          imageAlt="kract brandshoot 87"
          title=""
          title1='Demand & lead'
          title2="generation"
          title3=''
          description="Wil jij grip krijgen op een oneindige stroom aan leads? Lukt het niet om de juiste doelgroep aan te trekken? Komen de leads wel binnen, maar zijn deze niet kwalitatief genoeg voor sales om op te volgen?
          Wij denken mee over je hele business en weten met een doelgerichte aanpak de juiste mensen of bedrijven aan te trekken."
          buttonText="neem direct contact op"
          buttonLink="/over-ons/werkwijze/"
        />
         <Inmiddelsection
        tittlePargraph=''
        title="demand en lead generation met niice als business partner"
        subtitle='Jouw doelgroep aantrekken en prospects omzetten in leads, dat begint bij jou. Jouw positionering en communicatie zijn van groot belang voor je zichtbaarheid, merkbekendheid en dus ook voor je leads.'
        subtitle1='Met een gespecialiseerd leadgeneratie marketingteam en ervaren ontwikkelaars helpen wij jou met het maken van de juiste keuzes voor de toekomst. We werken rendement gestuurd, gaan voor meetbare en inzichtelijke data. Wat is een lead dit jaar waard? Wat is de lifetime value? En wat mag het dus kosten? We richten ons op het gehele proces en brengen daarvoor al onze diensten samen.'
        subtitle2=''
        subtitle3=''
        subtitle4=''
        subtitle5=''
        subtitle6=''
        displayType='pargraph'
      />
       <Section2
        titlePargraf=""
        title='Als partner in lead & demandgeneratie helpen wij je onder andere met:'
        description={['Vergroten van zichtbaarheid en merkbekendheid;'
        ,'Opbouwen en nurturen van klantrelaties en loyaliteit;'
        ,'Versterken van een samenwerking tussen sales en marketing;'
        ,'Genereren van kwalitatieve leads;'
        ,'Creëren van vraag door waardevolle inhoud;'
        ,'Benadrukken van gerichte advertenties op exact jouw doelgroep;'
        ,'Realiseren van grip op de sales funnel en leads voor moeiteloze opschaling;'
        ,'Integreren van demand generation om ook potentiële klanten aan te trekken die nog niet actief op zoek zijn naar jouw product;'
        ,'Corporate website;'
    ]}
        link=''
        text=''
        direction='row'
        imgSrc={kantoorSection}
        imgAlt='kantoor1'
        displayType= 'list'
      />
      <Section1
                titelSection1='onze diensten'
                titelSection2='gecombineerd in één'
                titelSection3='samenwerking'
                titelDisc="de oplossing voor jouw uitdagingen"
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
      <Section2
          titlePargraf="Vertel ons jouw doel"
          title='Laten we kennismaken'
          description={['Jij wilt werken aan een toekomstbestendig bedrijf en voorop lopen in de markt. Wij willen jou - als bedrijf en mens - helpen om digitale kansen optimaal in te zetten voor je organisatie. Niet alleen met technische oplossingen of marketing, ook met advies en ondersteuning.'
          ,'Neem contact met ons op of bel met Bas, dan plannen we direct een afspraak in om jou, je bedrijf en je kansen te leren kennen.'
          ]}
        link=''
          text='neem direct contact op'
          direction='row'
          imgSrc={kantoor1Section}
          imgAlt='kantoor1'
          displayType= 'pargraph'
        />
        <Emailms />
        <Footer />
        </>
    )
}
export default DemandAndLeadGeneration