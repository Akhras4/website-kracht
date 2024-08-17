import React from "react"
import Header from "../../header/header"
import Main from "../../main/main";
import Mobilenavbar from "../../header/Mobilenavbar";
import digitale from "../../../assets/img/digitale/kantoor-digitale.jpg"
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import Section2 from "../../sections/section2";
import kantoor1 from '../../../assets/img/digitale/kantoor-verticaa.webp'
import kantoor2 from '../../../assets/img/digitale/brandshoo.jpeg'
import kantoor3 from '../../../assets/img/digitale/brandshoot-16.jpeg'
import kantoor4 from '../../../assets/img/digitale/brandshoot-61.jpeg'
import Footer from "../../footer/footer";
const DigitalTransformatie: React.FC=()=>{
  console.log("DigitalTransformatie component renderd")
    return(
        <>
    <Header />
    <Mobilenavbar />
    <Imgmotionbg></Imgmotionbg>
      <Main
      imageSrc={digitale}
      imageAlt="kract brandshoot 87"
      title="digitale"
      title1=''
      title2="transformatie"
      title3=''
      description="De wereld verandert sneller dan ooit tevoren. Juist nu is het essentieel voor bedrijven die voorop willen lopen en in de toekomst relevant willen blijven om hun digitale infrastructuur in kaart te brengen. Om te innoveren. Om processen te optimaliseren, automatiseren en om inzichten te creëren op basis van data. Digitaal transformeren dus.
     Als jouw digitale business partner denken wij mee van begin tot eind en geven we samen je transformatie vorm. Waarom? Om te voorkomen dat je wordt ingehaald door concurrenten of de nieuwe generatie. Om waarde toe te blijven voegen voor je collega's. Om marges te vergroten en taken te vereenvoudigen, zodat je team zich kan richten op waardevollere werkzaamheden. Én om een sterke binding en behoud van medewerkers te garanderen."
      buttonText="neem direct contact op"
      buttonLink="/over-ons/werkwijze/"
    />
    <Section2 
    titlePargraf=""
      title='waarom een digitale transformatie?'
      description1='Jij weet het, zij weten het: stilstaan is geen optie, bijblijven is niet genoeg. Het is tijd om vooruit te lopen in de digitale revolutie, in jouw markt. Maar hoe?'
      description2='Een digitale transformatie kan leiden tot operationele efficiëntie, tot marktuitbreiding, betere klantrelaties en een sterke online aanwezigheid. Het leidt tot de kans om voorop te lopen.'
      description3='Maar hoe geef je die digitale transformatie vorm? Dat is voor elk bedrijf anders.'
      description4=''
      link=''
      text=''
      direction='row'
      imgSrc = {kantoor1}
      imgAlt='kantoor1'
       />
       <Section2 
       titlePargraf=""
      title='digitale transformatie met niice als business partner'
      description1='Digitale transformatie begint bij jouw visie, ambities, doelen. Wij denken strategisch mee - daarbij verder kijkend dan het verhogen van omzet - en helpen met het behalen van concurrentievoordeel. We richten ons op het gehele proces, van order tot nazorg, met een focus op automatiseren en digitaliseren en het slim benutten van AI en data. Daarvoor brengen wij al onze diensten samen.'
      description2='Altijd zoeken naar die stip, naar innoveren, naar relevant blijven. Ondanks dat die stip op de horizon blijft veranderen. Of verlegd wordt.'
      description3='We maken niet 1 tool, niet 1 oplossing, maar kijken naar je gehele digitale infrastructuur. Hoe kunnen we die verbeteren?'
      description4=''
      link=''
      text=''
      direction='row-reverse'
      imgSrc = {kantoor2}
      imgAlt='kantoor1'
       />
        <Section2 
        titlePargraf=""
      title='digitale transformatie met niice als business partner'
      description1='Digitale transformatie begint bij jouw visie, ambities, doelen. Wij denken strategisch mee - daarbij verder kijkend dan het verhogen van omzet - en helpen met het behalen van concurrentievoordeel. We richten ons op het gehele proces, van order tot nazorg, met een focus op automatiseren en digitaliseren en het slim benutten van AI en data. Daarvoor brengen wij al onze diensten samen.'
      description2='Altijd zoeken naar die stip, naar innoveren, naar relevant blijven. Ondanks dat die stip op de horizon blijft veranderen. Of verlegd wordt.'
      description3='We maken niet 1 tool, niet 1 oplossing, maar kijken naar je gehele digitale infrastructuur. Hoe kunnen we die verbeteren?'
      description4=''
      link=''
      text=''
      direction='row'
      imgSrc = {kantoor3}
      imgAlt='kantoor1'
       />
       <Section2 
       titlePargraf="Digital happiness voor digitale transformaties"
      title='Laten we kennismaken'
      description1='Jij wilt werken aan een toekomstbestendig bedrijf en voorop lopen in de markt. Wil geen dubbele en handmatige taken meer uitvoeren, maar jouw vakmensen echt in hun kracht zetten. Klopt? Dan is een digitale tranformatie jouw weg naar digital happiness.'
      description2='En daar helpen wij je bij! Niet alleen met technische oplossingen of marketing, ook met advies en ondersteuning. Laten we eens praten, dan laten we zien wat je opties zijn.'
      description3='Neem contact met ons op of <span>bel met Bas</span>, dan plannen we direct een afspraak in om jou, je bedrijf en je kansen te leren kennen.'
      description4=''
      link=''
      text='neem direct contact op'
      direction='row-reverse'
      imgSrc = {kantoor4}
      imgAlt='kantoor1'
       />
       <Footer />
     </>
    )
}
export default DigitalTransformatie