import React from "react"
import Header from "../../header/header"
import Main from "../../main/main";
import Mobilenavbar from "../../header/Mobilenavbar";
import Imgmotionbg from "../../imgmotionbg/imgmotionbg";
import recruitment from '../../../assets/img/recruitment/brandshoot-62.jpeg'
import Section2 from "../../sections/section2";
import kantoor1Section from '../../../assets/img/recruitment/brandshoot-25.jpeg'
import kantoor2Section from '../../../assets/img/recruitment/brandshoot-74.jpeg'
import Footer from "../../footer/footer";
import Emailms from "../../emailms/eamilms";
import Inmiddelsection from "../../sections/inmiddelsection";
import FlexItem from "../../sections/flexItem";
import Section1 from "../../sections/section1";

import barnd1 from '../../../assets/img/section1flexitem/brandshoot-1.jpeg'
import barnd2 from '../../../assets/img/section1flexitem/brandshoot-2.jpeg'
import barnd3 from '../../../assets/img/section1flexitem/brandshoot-3.jpeg'
import barnd4 from '../../../assets/img/section1flexitem/brand-4.jpeg'

const Recruitment: React.FC = () => {
    return (
        <>
            <Header />
            <Mobilenavbar />
            <Imgmotionbg></Imgmotionbg>
            <Main
                imageSrc={recruitment}
                imageAlt="kract brandshoot 87"
                title="Recruitment"
                title1=''
                title2="marketing"
                title3=''
                description="Wil jij grip krijgen op een oneindige stroom aan leads? Lukt het niet om de juiste doelgroep aan te trekken? Komen de leads wel binnen, maar zijn deze niet kwalitatief genoeg voor sales om op te volgen?
          Wij denken mee over je hele business en weten met een doelgerichte aanpak de juiste mensen of bedrijven aan te trekken."
                buttonText="neem direct contact op"
                buttonLink="/over-ons/werkwijze/"
            />
            <Section2
                titlePargraf="Vertel ons jouw doel"
                title='Laten we kennismaken'
                description={['Jij wilt werken aan een toekomstbestendig bedrijf en voorop lopen in de markt. Wij willen jou - als bedrijf en mens - helpen om digitale kansen optimaal in te zetten voor je organisatie. Niet alleen met technische oplossingen of marketing, ook met advies en ondersteuning.'
                    , 'Neem contact met ons op of bel met Bas, dan plannen we direct een afspraak in om jou, je bedrijf en je kansen te leren kennen.'
                ]}
                link=''
                text='neem direct contact op'
                direction='row'
                imgSrc={kantoor1Section}
                imgAlt='kantoor1'
                displayType='pargraph'
            />
            <Inmiddelsection
                tittlePargraph=''
                title="Als partner in recruitment marketing helpen wij je onder andere met:"
                subtitle='Een strategische merkpositionering waardoor jouw ideale kandidaten zich aangetrokken voelen en werven een structureel proces wordt;'
                subtitle1='Data-gedreven campagnes waarmee we op de punten focussen die jouw kandidaten belangrijk vinden. We geven ze een reden om voor jou te kiezen;'
                subtitle2='Het optimaliseren van de kandidaatervaring vanaf het eerste contactpunt tot aan de onboarding.'
                subtitle3='Contentstrategie en creatie: door het ontwikkelen van relevante content wekken we de interesse bij jouw kandidaten en creëren we betrokkenheid.'
                subtitle4=''
                subtitle5=''
                subtitle6=''
                displayType='list'
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
                    , 'Neem contact met ons op of bel met Bas, dan plannen we direct een afspraak in om jou, je bedrijf en je kansen te leren kennen.'
                ]}
                link=''
                text='neem direct contact op'
                direction='row'
                imgSrc={kantoor2Section}
                imgAlt='kantoor1'
                displayType='pargraph'
            />

            <Emailms />
            <Footer />
        </>
    )
}
export default Recruitment;