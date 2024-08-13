import React from 'react';
import { motion} from 'framer-motion'

const Light: React.FC = () => {
  return (
    <>
    <motion.div
    id="light"
  className="absolute top-0 right-0 z-[2]  w-64 h-64 rounded-full"

  initial={{ x: '30%', y: '30%' }}
  animate={{ x: ['-250%', '30%', '-50%'], y: ['-10%', '-30%', '160%'] }}
  transition={{
    duration: 9, 
    ease: ['easeOut', 'linear', 'easeIn'], 
    times: [0, 0.5, 1], 
    repeat: Infinity,
    repeatType: 'reverse', 
  }}

>
<div className="pattern"></div>
<div className="overlay"></div>
<div className="pattern"></div>

</motion.div>
<motion.div
    id="light2"
  className="absolute top-0 right-0 z-[2]  w-64 h-64 rounded-full"

  initial={{ x: '30%', y: '30%' }}
  animate={{ x: ['-350%', '30%', '-50%'], y: ['100%', '-30%', '100%'] }}
  transition={{
    duration: 9, 
    ease: ['easeOut', 'linear', 'easeIn'], 
    times: [0, 0.5, 1], 
    repeat: Infinity,
    repeatType: 'reverse', 
  }}

>
<div className="pattern"></div>
<div className="overlay"></div>
<div className="pattern"></div>

</motion.div>
<motion.div
    id="light3"
  className="absolute bottom-10 left-10 z-[2]  w-64 h-64 rounded-full"

  initial={{ x: '-20%', y: '-20%' }}
    animate={{ x: ['100%', '-10%', '120%'], y: ['-10%', '-100%', '-10%'] }}
  transition={{
    duration: 9, 
    ease: ['easeOut', 'linear', 'easeIn'], 
    times: [0, 0.5, 1], 
    repeat: Infinity,
    repeatType: 'reverse', 
  }}

>
<div className="pattern"></div>
<div className="overlay"></div>
<div className="pattern"></div>

</motion.div>

</>
  );
};

export default Light;
