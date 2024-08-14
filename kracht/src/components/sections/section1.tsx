import React from "react";
import './section.css'
import digitaletransform from '../../assets/img/section1flexitem/krachtkantoor.webp'
import demandleadgen from '../../assets/img/section1flexitem/karctbranndshot.webp'
import ecommerce from '../../assets/img/section1flexitem/ecom.webp'
import reccruitment from '../../assets/img/section1flexitem/krachtdeman.webp'
import Imgmotionbg from "../imgmotionbg/imgmotionbg";
import FlexItem from "./flexItem";
interface sectionProps{
    titelSection1:string;
    titelSection2:string;
    titelSection3:string;
    titelDisc:string;
}

const Section1:React.FC<sectionProps>=({
    titelSection1,
    titelSection2,
    titelSection3,
    titelDisc,
})=>{
    return (
        <>
        <section className="section">
        <Imgmotionbg />
        <hgroup>
           <h1>
           {titelSection1}
           </h1>
           <h1>
           {titelSection2}
           </h1>
           <h1>
           {titelSection3}
           </h1>
           {titelDisc ? <p>titelDisc</p> : null }
        </hgroup>
            <div className="sectionFlexcontiner">
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
            </div>
        </section>

 
        </>
    )
}
export default Section1