import React from "react";
import Header from "../../header/header"
import Main from "../../main/main";
import Mobilenavbar from "../../header/Mobilenavbar";
import ecommerce from "../../../assets/img/ecommerce/brandshoot-80.jpeg"
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import Section2 from "../../sections/section2";
import kantoor1 from '../../../assets/img/ecommerce/brandshoot-19.jpeg'
import kantoor2 from '../../../assets/img/ecommerce/brandshoot-10.jpeg'
import kantoor3 from '../../../assets/img/ecommerce/brandshoot-6.jpeg'
import Footer from "../../footer/footer";
import Emailms from "../../emailms/eamilms";
import Section1 from "../../sections/section1";
import FlexItem from "../../sections/flexItem";
import barnd1 from '../../../assets/img/section1flexitem/brandshoot-1.jpeg'
import barnd2 from '../../../assets/img/section1flexitem/brandshoot-2.jpeg'
import barnd3 from '../../../assets/img/section1flexitem/brandshoot-3.jpeg'
import barnd4 from '../../../assets/img/section1flexitem/brand-4.jpeg'

const Ecommerce : React.FC = () => {
    return (
        <>
        <Header />
        <Mobilenavbar />
        <Imgmotionbg></Imgmotionbg>
        <Main
          imageSrc={ecommerce}
          imageAlt="kract brandshoot 87"
          title=""
          title1=''
          title2="Ecommerce"
          title3=''
          description="Bied je fantastische producten aan, maar krijg je ze niet aan de man? Gaat veel van je budget naar advertenties, zonder dat je daar resultaten van terug ziet? Wil je grip op de cijfers krijgen om verder op te schalen; niet alleen op omzet, maar ook écht op resultaat sturen?
           Als jouw business partner denken wij mee over je hele e-commerce business en zorgen we met een doelgerichte aanpak voor digital happiness."
          buttonText="neem direct contact op"
          buttonLink="/over-ons/werkwijze/"
        />
        <Section2
          titlePargraf=""
          title='E-commerce met Niice als business partner'
          description={[
            "Digitale transformatie begint bij jouw visie, ambities, doelen. Wij denken strategisch mee - daarbij verder kijkend dan het verhogen van omzet - en helpen met het behalen van concurrentievoordeel. We richten ons op het gehele proces, van order tot nazorg, met een focus op automatiseren en digitaliseren en het slim benutten van AI en data. Daarvoor brengen wij al onze diensten samen.",
            "Altijd zoeken naar die stip, naar innoveren, naar relevant blijven. Ondanks dat die stip op de horizon blijft veranderen. Of verlegd wordt.",
            "We maken niet 1 tool, niet 1 oplossing, maar kijken naar je gehele digitale infrastructuur. Hoe kunnen we die verbeteren?",
          ]}
          link=''
          text=''
          direction='row'
          imgSrc={kantoor1}
          imgAlt='kantoor1'
          displayType= 'pargraph'
        />

  
        <Section2
          titlePargraf=""
          title='Als e-commerce partner helpen wij je onder andere met:'
          description={ [
            "Bereiken van nieuwe klanten d.m.v. performance gestuurde campagnes;",
            "Meer uit bestaande klanten halen: upsell en herhaalaankopen stimuleren;",
            "Verhogen van je gemiddelde orderwaarde;",
            "Geen advertentiebudget verbranden, maar sturen op ROAS (return on ad spend);",
          ]}
          link=''
          text=''
          direction='row-reverse'
          imgSrc={kantoor2}
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
          titlePargraf=""
          title='digitale transformatie met niice als business partner'
          description={['Digitale transformatie begint bij jouw visie, ambities, doelen. Wij denken strategisch mee - daarbij verder kijkend dan het verhogen van omzet - en helpen met het behalen van concurrentievoordeel. We richten ons op het gehele proces, van order tot nazorg, met een focus op automatiseren en digitaliseren en het slim benutten van AI en data. Daarvoor brengen wij al onze diensten samen.'
          ,'Altijd zoeken naar die stip, naar innoveren, naar relevant blijven. Ondanks dat die stip op de horizon blijft veranderen. Of verlegd wordt.'
          ,'We maken niet 1 tool, niet 1 oplossing, maar kijken naar je gehele digitale infrastructuur. Hoe kunnen we die verbeteren?'
          ]}
        link=''
          text='neem direct contact op'
          direction='row-reverse'
          imgSrc={kantoor3}
          imgAlt='kantoor1'
          displayType= 'pargraph'
        />

        <Emailms />
        <Footer />
      </>
    )
  }

export default Ecommerce