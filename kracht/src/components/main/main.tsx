import React from "react";
import './main.css';
import TextButton from "../TextButton/TextButton";
import { motion } from 'framer-motion';
import Light from "../light/light";

interface MainProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  title1: string |null;
  title2: string |null;
  title3:string |null;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Main: React.FC<MainProps> = ({
  imageSrc,
  imageAlt,
  title,
  title1,
  title2,
  title3,
  description,
  buttonText,
  buttonLink
}) => {
  return (
    <main id="main" className="mt-16 flex justify-end gap-10 pt-14">
      <motion.div 
        id="left" 
        className="z-50 w-6/12 h-6/12"
        initial={{ y: '150px' }}
        animate={{ y: '0px' }}
        transition={{
          duration: 1,
          ease: 'easeIn',
        }}
      >
        <div id="titel" className="relative visibleContent animate-title pointer-events-auto z-515 ">
          <h1 className="text-white leading-h1  ">
            {title}
            <br />
            {title1 ?
            <span className="text-home-hero-h1 leading-h1 fluid ml-5">{  title1}</span>
              : null}
            {  title2 ? title2 :null}
            <br />
            {  title2 ? title3 :null}
          </h1>
        </div>
        <div className="visibleContent relative animate-description mt-5 col-start-2 col-span-4 pointer-events-auto">
          <div className="mt-2 text-white leading-p">
            <p dir="ltr">{description}</p>
          </div>
        </div>
        {buttonText ? <TextButton
          text={buttonText}
          link={buttonLink}
        />
        :null} 
      </motion.div>
      <motion.div id="right"
       initial={{ y: '150px' }}
       animate={{ y: '0px' }}
       transition={{
         duration: 2,
         ease: 'easeOut',
       }}>
        <div>
          <img
            src={imageSrc}
            title={imageAlt}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
      <Light
        id="light3"
        className="bottom-10 left-10 z-[2]"
        initial={{ x: '-20%', y: '-20%' }}
        animate={{ x: ['10%', '-160%', '100%'], y: ['-10%', '-100%', '-80%'] }}
        transition={{
          duration: 9,
          ease: ['easeOut', 'linear', 'easeIn'],
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: 'reverse',
          
        }}
        ></Light>
    </main>
  );
};

export default Main;



